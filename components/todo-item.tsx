import * as React from "react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { EditTodo } from "@/components/edit-todo";
import { DeleteTodo } from "@/components/delete-todo";
import Link from "next/link";

export function TodoItem({
  id,
  userID,
  title,
  description,
  imageURL,
  completed,
}: {
  id: number;
  userID: string;
  title: string;
  description: string;
  imageURL: string;
  completed: boolean;
}) {
  return (
    <div className="relative">
      <Link className="w-full" href={`/todo/${id}`}>
        <div
          className={`w-full flex items-center justify-start rounded-[2rem] border py-4 px-5 shadow-sm space-x-4 ${
            completed && "border-2 border-blue-600"
          }`}
        >
          <Switch
            checked={completed}
          />
          <div className="w-[calc(100%-150px)]">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-slate-500 text-sm line-clamp-3">{description}</p>
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-2 absolute top-3 right-3 z-10">
        <EditTodo id={id} title={title} description={description} completed={completed} imageURL={imageURL} />
        <DeleteTodo todoId={id} />
      </div>
    </div>
  );
}
