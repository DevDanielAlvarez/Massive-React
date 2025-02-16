'use client';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ArrowForwardIosOutlined } from '@mui/icons-material';
import { ArrowBackIosOutlined } from '@mui/icons-material';
export default function SidebarComponent() {

    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = ()=> {
        //if true
        if(collapsed == true){
            setCollapsed(false);
            return;
        }
        //if false (else)
        setCollapsed(true);
        return;
    }

    return (
        <Sidebar collapsed={collapsed} className='h-screen col-span-2'>
            <Button onClick={(event) => {handleCollapse()}}>{collapsed == true ? <ArrowForwardIosOutlined/> : <ArrowBackIosOutlined/> }</Button>
            <Menu>
                
                <SubMenu label="Use State">
                    <MenuItem> Todo App </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>
        </Sidebar>
    );

}