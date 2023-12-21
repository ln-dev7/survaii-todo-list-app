"use client";

import { useQuery } from "@apollo/client";
import { GET_TODOS } from "@/graphql/queries";
import { AddTodo } from "@/components/add-todo";
import { TodoItem } from "@/components/todo-item";
import { LayoutTemplate } from "lucide-react";
import { SkeletonTodos } from "@/components/skeletons/todos";
import { ErrorServer } from "@/components/errors/error-server";

export default function Home() {
  const {
    loading: loadingTodos,
    error: errorTodos,
    data: dataTodos,
  } = useQuery(GET_TODOS);

  if (loadingTodos) {
    return <SkeletonTodos />;
  }

  if (errorTodos) {
    return <ErrorServer message={errorTodos.message} />;
  }

  return (
    <>
      <div className="w-full flex items-center justify-end border-b pb-6">
        <AddTodo />
      </div>
      <div className="w-full flex flex-col items-start justify-center space-y-5">
        {dataTodos.todos.map((todo: any) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            userID={todo.userID}
            title={todo.title}
            description={todo.description}
            imageURL={todo.imageURL}
            completed={todo.completed}
          />
        ))}
        {!dataTodos.todos.length && (
          <div className="w-full h-96 p-10 flex flex-col gap-4 items-center justify-center border border-dashed rounded-lg">
            <LayoutTemplate className="w-12 h-12" />
            <p className="text-slate-500 text-xl">No todo</p>
          </div>
        )}
      </div>
    </>
  );
}
