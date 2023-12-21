"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import * as z from "zod";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@apollo/client";
import { UPDATE_TODO } from "@/graphql/mutations";
import { GET_TODOS } from "@/graphql/queries";

export function EditTodo({
  id,
  title,
  description,
  completed,
  imageURL,
}: {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  imageURL: string;
}) {
  const { toast } = useToast();

  const editTodoSchema = z.object({
    title: z.string().min(3, {
      message: "Title must be at least 3 characters.",
    }),
    description: z.string().min(5, {
      message: "Description must be at least 5 characters.",
    }),
    imageURL: z.string().url({
      message: "Enter valid URL",
    }),
    completed: z.boolean().default(false).optional(),
  });

  const form = useForm<z.infer<typeof editTodoSchema>>({
    resolver: zodResolver(editTodoSchema),
    defaultValues: {
      title: title,
      description: description,
      imageURL: imageURL,
      completed: completed,
    },
  });

  const [updateTodo] = useMutation(UPDATE_TODO, {
    refetchQueries: [{ query: GET_TODOS, variables: { id: id } }],
    onCompleted: () => {
      toast({
        title: "Todo has been updated",
        description: "Todo has been updated",
        action: <ToastAction altText="Todo has been updated">Undo</ToastAction>,
      });
    },
  });

  const onSubmit = async (values: z.infer<typeof editTodoSchema>) => {
    try {
      const todoValues = { ...values, userID: "lndev" };
      await updateTodo({
        variables: { todo: todoValues },
      });
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-11 h-11 p-0 rounded-full">
          <Pencil className="w-5 h-5 text-blue-600" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit todo</AlertDialogTitle>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="5h of code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageURL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>imageURL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://picsum.photos/1080/720"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="completed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2 rounded-lg border p-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="mt-[0!important]">
                    <FormLabel className="font-semibold cursor-pointer">This todo is completed ?</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <div className="w-full flex items-end justify-end gap-4">
              <Button type="submit">Edit todo</Button>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
