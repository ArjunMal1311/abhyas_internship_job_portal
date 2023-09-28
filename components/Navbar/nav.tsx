"use client"
import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { User } from '@prisma/client';

interface NavbarProps {
    currentUser?: User;
}

const Navbar = ({ currentUser }: NavbarProps) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as HTMLElement)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('click', handleClickOutside);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className='flex flex-row items-center justify-between gap-4 md:gap-0 mx-6 my-2 border-b-2 py-2'>
            <Link href="/" className='purple_gradient font-extrabold leading-[1.15] text-black text-2xl'>Abhyas</Link>
            <div className='relative' ref={menuRef}>
                <div className='flex flex-row items-center gap-3'>
                    <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
                        <h4 className='purple_gradient'>"Abhyas Job Listing Portal"</h4>
                    </div>
                    <div onClick={toggleOpen} className='p-4 md:py-2 md:px-3 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition' >
                        <AiOutlineMenu />
                    </div>

                    {isOpen && (
                        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm hover:cursor-pointer border-2'>
                            <div>
                                <>
                                    {currentUser && <div className='px-4 py-3 hover:bg-neutral-300 transition font-semibold cursor-pointer select-none'>Hello, {currentUser.name}</div>}
                                    <div className='px-4 py-3 hover:bg-neutral-300 transition font-semibold cursor-pointer select-none' onClick={() => router.push('/listing')}>Listings</div>
                                    <div className='px-4 py-3 hover:bg-neutral-300 transition font-semibold cursor-pointer select-none' onClick={() => router.push('/responses')}>Responses</div>
                                    {currentUser?.isAdmin && <div className='px-4 py-3 hover:bg-neutral-300 transition font-semibold cursor-pointer select-none' onClick={() => router.push('/opportunity')}>Add Listing</div>}
                                    {currentUser && <div className='px-4 py-3 hover.bg-neutral-300 transition font-semibold cursor-pointer select-none' onClick={() => signOut()}>Sign Out</div>}
                                    {!currentUser && <div className='px-4 py-3 hover.bg-neutral-300 transition font-semibold cursor-pointer select-none' onClick={() => router.push("/login")}>Sign in</div>}
                                </>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
