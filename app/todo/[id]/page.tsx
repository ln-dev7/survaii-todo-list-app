"use client";

import { useQuery } from "@apollo/client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditTodo } from "@/components/edit-todo";
import { DeleteTodo } from "@/components/delete-todo";
import { GET_TODO } from "@/graphql/queries";
import { SkeletonTodo } from "@/components/skeletons/todo";
import { ErrorServer } from "@/components/errors/error-server";

export default function TotoDetail({ params }: { params: { id: string } }) {
  const id = params.id;
  const { loading, error, data } = useQuery(GET_TODO, {
    variables: { id: parseInt(id as string, 10) },
  });

  if (loading) {
    return <SkeletonTodo />;
  }

  if (error) {
    return <ErrorServer message={error.message} />;
  }

  const todo = data.todo;

  return (
    <>
      <div className="w-full flex items-center justify-start">
        <Link className="flex items-center gap-2" href="/">
          <Button variant="outline">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
      <div
        className={`w-full flex flex-col items-start justify-center space-y-6 ${
          todo.completed && "border-2 border-blue-600 rounded-3xl px-3 pt-3"
        }`}
      >
        <div className="w-full bg-slate-100 h-72 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={todo.imageURL}
            alt="photo"
          />
        </div>
        <div className="space-y-2 mb-6">
          <h1 className="text-2xl font-bold">{todo.title}</h1>
          <p className="text-slate-500">{todo.description}</p>
          <div className="p-3 flex items-center justify-end w-full rounded-lg">
            <p className="text-blue-600 text-sm italic underline underline-offset-4 font-semibold">
              TODO Completed !
            </p>
          </div>
        </div>
        <div className="border-t flex items-center justify-end gap-2 w-full py-6">
          <EditTodo />
          <DeleteTodo todoId={parseInt(id as string, 10)} />
        </div>
      </div>
    </>
  );
}
