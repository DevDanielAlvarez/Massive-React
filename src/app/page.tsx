'use client'
import TodoForm from "@/components/ToDoForm/ToDoForm";
import ToDoList from "@/components/ToDoList/ToDoList";
import { Task } from "@/types/TaskType";
import Image from "next/image";
import { useState } from "react";



export default function Home() {

  const [task, setTask] = useState<Task[]>([]);

  return (
    <main className="grid grid-cols-12 pt-8">



      <TodoForm setTask={setTask} />
      <ToDoList tasks={task} setTasks={setTask} />
    </main>
  );
}
