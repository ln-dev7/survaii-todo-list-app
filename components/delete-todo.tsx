import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_TODO } from "@/graphql/mutations";
import { useRouter } from "next/navigation";

export function DeleteTodo({ todoId }: { todoId: number }) {
  const { toast } = useToast();
  const router = useRouter();

  const [deleteTodo] = useMutation(DELETE_TODO, {
    onCompleted: () => {
      toast({
        description: "Todo has been deleted",
        variant: "destructive",
      });
      router.push("/");
    },
  });

  const handleDeleteTodo = () => {
    deleteTodo({
      variables: { id: todoId },
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-11 h-11 p-0 rounded-full" variant="destructive">
          <Trash className="w-5 h-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteTodo}>
            Delete todo
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
