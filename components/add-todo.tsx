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
import { Plus } from "lucide-react";
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
import * as z from "zod";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function AddTodo() {
  const { toast } = useToast()

  const addTodoSchema = z.object({
    title: z.string().min(3, {
      message: "Title must be at least 3 characters.",
    }),
    description: z.string().min(5, {
      message: "Description must be at least 5 characters.",
    }),
    imageURL: z.string().url({
      message: "Enter valid URL",
    }),
  });

  const form = useForm<z.infer<typeof addTodoSchema>>({
    resolver: zodResolver(addTodoSchema),
    defaultValues: {
      title: "",
      description: "",
      imageURL: "", // https://picsum.photos/1080/720
    },
  });

  function onSubmit(values: z.infer<typeof addTodoSchema>) {
    console.log(values);
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <Plus className="w-5 h-5 mr-2" />
          Add todo
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add a new todo</AlertDialogTitle>
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
            <div className="w-full flex items-end justify-end gap-4">
              <Button type="submit">Add todo</Button>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
