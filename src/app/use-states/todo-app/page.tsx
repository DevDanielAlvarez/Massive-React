'use client';
import TodoForm from "@/components/ToDoForm/ToDoForm";
import ToDoList from "@/components/ToDoList/ToDoList";
import { Task } from "@/types/TaskType";
import { useState } from "react";

export default function TodoAppPage(){

    const [tasks,setTasks] = useState<Task[]>([]);

    return (
        <div>
            <TodoForm setTask={setTasks} />
            <ToDoList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}