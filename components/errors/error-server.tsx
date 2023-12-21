import React from "react";

export function ErrorServer({ message }: { message: any }) {
  return (
    <div className="w-full flex items-center justify-center">
      <p className="text-center font-bold">Error : {message}</p>
    </div>
  );
}
