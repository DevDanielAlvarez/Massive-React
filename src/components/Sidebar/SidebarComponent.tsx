'use client';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ArrowForwardIosOutlined } from '@mui/icons-material';
import { ArrowBackIosOutlined } from '@mui/icons-material';
import { Routes } from '@/routes/Routes';
import { useRouter } from 'next/navigation';
export default function SidebarComponent() {

  const [collapsed, setCollapsed] = useState(false);

  const router = useRouter();

  const handleCollapse = () => {
    //if true
    if (collapsed == true) {
      setCollapsed(false);
      return;
    }
    //if false (else)
    setCollapsed(true);
    return;
  }

  return (

    <Sidebar collapsed={collapsed} className='h-screen col-span-1'>
      <Button onClick={(event) => { handleCollapse() }}>{collapsed == true ? <ArrowForwardIosOutlined /> : <ArrowBackIosOutlined />}</Button>
      <Menu>

        <SubMenu label="Use State">
          <MenuItem onClick={() => router.push(Routes.TODO_APP)}> Todo App </MenuItem>
          <MenuItem onClick={() => router.push(Routes.USERS)}> Users </MenuItem>
        </SubMenu>

        <SubMenu label="Use Effect">
          <MenuItem onClick={() => router.push(Routes.COUNTER)}> Counter </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>


  );

}
