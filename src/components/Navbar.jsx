"use client"
import { useState } from "react";
import {  Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItem = <>
       <li>
        <Link href={"/"}>Home</Link>
       </li>
        <li>
            <Link href="/all-pets">All Pets</Link>
        </li>
        <li>
            <Link href="/my-request">My Request</Link>
        </li>
        <li>
            <Link href="/add-pets">Add Pets</Link>
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
                        <li>
                            <Link href="/login">LogIn</Link>
                        </li>
                        <li>
                            <Link href="/signup">SignUp</Link>
                        </li>

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