import React from "react";
import { Skeleton } from "../ui/skeleton";

export function SkeletonTodos() {
  return (
    <div className="space-y-4 w-full *:rounded-[2rem] *:shadow-sm *:h-20">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
