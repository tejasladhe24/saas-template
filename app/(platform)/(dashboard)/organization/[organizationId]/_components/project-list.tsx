import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { User2 } from "lucide-react";

import { db } from "@/lib/db";
import { Skeleton } from "@/components/ui/skeleton";
import { CreateProjectButton } from "./create-project-button";

export const ProjectList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    return redirect("/select-org");
  }

  const projects = await db.project.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center font-semibold text-lg">
          <User2 className="h-6 w-6 mr-2" />
          Your Projects
        </div>
        <CreateProjectButton />
      </div>
      {projects.length === 0 && (
        <div className="flex flex-col w-full items-center space-y-2">
          <h1 className="opacity-75">
            No Projects yet
          </h1>

        </div>
      )}
      {
        projects.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project: any) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden"
                style={{ backgroundImage: `url(${project.imageThumbUrl})` }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                <p className="relative font-semibold text-white">{project.title}</p>
              </Link>
            ))}
          </div>
        )
      }

    </div>
  );
};

ProjectList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="grid gird-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
    </div>
  );
};