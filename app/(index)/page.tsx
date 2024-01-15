import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

const EntryPage = () => {
    return (
        <main className="h-screen flex items-center justify-center">
            <div className="hidden dark:block absolute w-full h-full bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600"/>
            <div className="dark:hidden absolute w-full h-full bg-gradient-to-r from-pink-100 via-purple-300 to-indigo-400"/>
            <div className="min-w-[400px] max-w-[700px] py-20 flex flex-col items-center backdrop-blur rounded-lg justify-center space-y-4 dark:text-offgray text-offblack">
                <h1 className="font-semibold text-indigo-400 text-8xl">SaaS Platform</h1>
                <p className="opacity-80">Create your own SaaS platform with this template.</p>
                <Separator />
                <div className="flex items-center space-x-4">
                    <Link href={"/sign-in"}>
                        <Button>Get Started</Button>
                    </Link>
                </div>
                <div className="flex flex-col w-full">
                    <div className="relative flex flex-wrap gap-20 justify-center py-20 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/template/clerk.svg"
                            alt="Clerk.js Logo"
                            width={180}
                            height={37}
                            priority
                        />
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/template/prisma.svg"
                            alt="Prisma Logo"
                            width={180}
                            height={37}
                            priority
                        />
                        <div className="flex items-center space-x-4">
                            <Image
                                className="w-14 rounded relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/template/shadcn-ui.png"
                                alt="shadcn/ui Logo"
                                width={180}
                                height={37}
                                priority
                            />
                            <h1 className="text-xl font-semibold">shadcn/ui</h1>
                        </div>
                       
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EntryPage