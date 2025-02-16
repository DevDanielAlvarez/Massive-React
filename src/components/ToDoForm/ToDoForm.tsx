import React, { SetStateAction, useState } from "react";
import styles from "./ToDoForm.module.scss";
import { Task } from "@/types/TaskType";
import { Button, TextField } from "@mui/material";

export default function TodoForm({ setTask }: { setTask: React.Dispatch<SetStateAction<Task[]>> }) {

    const [title, setTitle] = useState('');

    const [description, setDescription] = useState('');

    const handleSubmitAction = (event: React.FormEvent) => {

        event.preventDefault();

        setTask((prev) => {
            return [
                ...prev,
                {
                    id: prev.length + 1,
                    title: title,
                    description: description
                }
            ];
        });

        //reset title state
        setTitle('');
        setDescription('');


    }

    return (
        <form className="grid grid-cols-12 gap-6 col-span-8 col-start-3 border p-8 rounded-lg mb-8" onSubmit={handleSubmitAction}>

            <TextField
                value={title}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                className="col-span-full" placeholder="Task title"/>
            <TextField
                value={description}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
                className="col-span-full" placeholder="Task description"/>

            <Button type="submit" className="col-span-1" variant="contained" color="success">Send</Button>

        </form>
    );
}