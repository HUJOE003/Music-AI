"use client";
//import { UserButton } from '@clerk/nextjs';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
const routes = [
  {
    name: "Chat",
    path: "/",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <div className = "p-4 flex flex-row justify-between items-center bg-black text-white">
      <Link href = "/"> <h1 className='text-2xl font-bold'> Rick AI Coach</h1></Link>
      <div className='flex gap-x-6 text-lg items-center'>
      {routes.map((route, idx) => (
        <Link
        key = {idx}
        href = {route.path}
        className={
          pathname === route.path ? "border-b-2 border-yellow-500" : "" 
        }
        
        >
        {route.name}
        </Link>
      ))}
    
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton/>
      </SignedOut>
      
      
      </div>
    </div>
  )
}

export default Navbar