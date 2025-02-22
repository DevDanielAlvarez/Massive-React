import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User } from '@/types/UserType';

export default function ListUsers({ users }: { users: User[] }) {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table" className='col-start-2 col-span-6'>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell >Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user: User) => {

          return (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{user.id}</TableCell>
              <TableCell >{user.name}</TableCell>
              <TableCell >{user.email}</TableCell>
            </TableRow>
          );

        })}


      </TableBody>
    </Table>
  );
}