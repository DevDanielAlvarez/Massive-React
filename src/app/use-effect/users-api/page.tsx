'use client'
import { UserApi } from "@/types/usersApi/UserApiType";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function usersApiPage() {

  const [users, setUsers] = useState<UserApi[]>([]);

  const [searchInputValue, setSearchInputValue] = useState('');

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((promisseSolved) => setUsers(promisseSolved));

  }, []);

  const getFilteredUsers = (): UserApi[] => {
    return users.filter((user) => {
      if (searchInputValue == '') { return true; }
      if (user.name.toLowerCase().includes(searchInputValue.toLowerCase())) {
        return true;
      }
      return false;
    })
  }

  return (
    <div className="col-span-full grid grid-cols-8 gap-y-6">
      <span>{searchInputValue}</span>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        className="col-span-6 col-start-2"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setSearchInputValue(event.target.value) }}
      />
      <TableContainer className="col-start-2 col-span-6">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getFilteredUsers().map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.username}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.email}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
