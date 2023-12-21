import React from "react";
import { Skeleton } from "../ui/skeleton";

export function SkeletonTodo() {
  return (
    <div className="w-full flex flex-col items-start justify-center">
      <Skeleton className="w-full h-72 rounded-lg mb-6" />
      <Skeleton className="w-1/3 h-4 rounded-md mb-4" />
      <Skeleton className="w-2/3 h-3 rounded-md mb-2" />
      <Skeleton className="w-full h-3 rounded-md mb-2" />
      <Skeleton className="w-1/3 h-3 rounded-md mb-2" />
      <Skeleton className="w-5/6 h-3 rounded-md mb-2" />
      <Skeleton />
    </div>
  );
}
