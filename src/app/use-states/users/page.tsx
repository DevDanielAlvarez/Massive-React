'use client';
import ListUsers from "@/components/User/ListUsers";
import UserFormComponent from "@/components/User/UserFromComponent";
import { User } from "@/types/UserType";
import { useState } from "react";

export default function UserPage() {

    const [users, setUsers] = useState<User[]>([]);

    return (
        <>
            <div className="col-span-full grid grid-cols-8 gap-y-6">
            <h1 className="col-span-full col-start-2 text-[36px] font-bold">Welcome To Users Page</h1>

                <UserFormComponent users={users} setUsers={setUsers} />
                <ListUsers users={users}/>
            </div>
        </>

    );
}