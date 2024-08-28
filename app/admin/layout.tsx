import SideBar from '@/components/adminComponents/SideBar';
import React, { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css' ;


interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
        <div>
            <ToastContainer theme='dark'/>
            <SideBar/>
        </div>
            {children}
        </>
    );
}
