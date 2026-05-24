"use client"
import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import NavLink from "./NavLink";

export function Navbar() {
    const [open, setOpen] = useState(false);

    const {
        data: session,
    } = authClient.useSession();
    const user = session?.user;
    //  console.log(user)
    const handalLogOut = async () => {
        await authClient.signOut();
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItem = <>
        <li>
            <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
            <NavLink href="/all-pets">All Pets</NavLink>
        </li>
        <li>
            <NavLink href="/my-request">My Request</NavLink>
        </li>
        <li>
            <NavLink href="/add-pets">Add Pets</NavLink>
        </li>
    </>

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="items-center ">

                        <Image src={"/assects/logop.png"} alt="pawhaven" width={130} height={50} className=""></Image>
                    </div>
                </div>
                <ul className="hidden items-center gap-4 md:flex">
                    {menuItem}
                </ul>
                <div>
                    <ul className="flex items-center gap-4 md:flex">
                        {
                            user ? (
                                <div onClick={() => setOpen(!open)} className="flex items-center gap-3 p-1 rounded-lg hover:bg-orange-500">
                                    <Avatar>
                                        <Avatar.Image alt={user?.name} src={user?.image} />
                                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                    </Avatar>

                                    {/* Dropdown */}
                                    <div className="relative">
                                        <button

                                            className="text-gray-600 cursor-pointer"
                                        >
                                            {user.name.slice(0, 2)}▼
                                        </button>

                                        {open && (
                                            <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
                                                <Link
                                                    href="/dashboard"
                                                    onClick={() => setOpen(false)}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                                >
                                                    Dashboard
                                                </Link>
                                                <hr />
                                                <button
                                                    onClick={() => { handalLogOut(); setOpen(false); }}
                                                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : <>
                                <li>
                                    <Link href="/login">LogIn</Link>
                                </li>
                                <li>
                                    <Link href="/signup">SignUp</Link>
                                </li>
                            </>
                        }


                    </ul>
                </div>
            </header>

            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <div className="flex items-center">

                        <ul className="flex flex-col gap-2 p-4">
                            {menuItem}
                        </ul>
                    </div>

                </div>
            )}
        </nav>
    );
}