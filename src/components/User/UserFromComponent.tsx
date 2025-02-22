'use client';
import { User } from "@/types/UserType";
import { Button, TextField } from "@mui/material";
import React, { FormEvent, SetStateAction, useState } from "react";

export default function UserFormComponent({ users, setUsers }: { users: User[], setUsers: React.Dispatch<SetStateAction<User[]>> }) {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent) => {

        event.preventDefault();


        setUsers((prevUsers) => {
            return [...prevUsers, {
                id: prevUsers.length + 1,
                name: name,
                email: email,
                password: password
            }]
        });
    }

    return (
        <form onSubmit={(event: FormEvent) => handleSubmit(event)} className="grid grid-cols-8 gap-x-2 gap-y-4 col-start-2 col-span-6 p-8 border rounded-xl">

            <TextField onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" className="col-span-4" />

            <TextField onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" className="col-span-4" />

            <TextField onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} id="outlined-basic" label="Password" variant="outlined" className="col-span-8" />

            <Button type="submit" variant="contained" color="success" className="col-start-1">
                Create
            </Button>
        </form>
    );
} 