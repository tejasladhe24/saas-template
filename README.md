This is a [Next.js](https://nextjs.org/) project w/ app router and server components, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [`shadcn/ui components`](https://ui.shadcn.com/), [`Prisma ORM`](prisma.io), and authentication + organizations using [`Clerk.js`](https://clerk.com/) 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Added Features

1. Clerk.js authentication and organizations. Usage docs [`here`](https://clerk.com/docs/quickstarts/nextjs).

1. Prisma ORM. Change `DATABASE_URL` in `.env` to use your own database. You can edit schema at `@/prisma/schema.prisma`. Import db from `@/lib/db` to use prisma client anywhere in server components. Quickstart guide [`here`](https://www.prisma.io/docs/getting-started/quickstart).

1. shadcn/ui pre-built components library.

1. [`next-themes`](https://www.npmjs.com/package/next-themes) is added with a toggle button component.

## Project Structure

1. `@/app/(index)` renders entry page.

1. `@/app/(platform)/(clerk)` contains authentication routes - default names are [`sign-in/`](http://localhost:3000/sign-in/) and [`sign-up/`](http://localhost:3000/sign-up/).

1. `@/app/(platform)/(dashboard)` will contain app routes. `/organization/:id` and `/project:/id` are added.
1. `@/lib` will contain utility functions or instances.

1. `@/hooks` will contain hooks, say, `use-mobile-sidebar` for launching sidebar in mobile devices.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.