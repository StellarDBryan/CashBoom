"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { NavLinkBtn } from "./buttons";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { useUserStats } from "@/app/UserStatsContext";

const content = {
    home: "Inicio", 
    challenges: "Retos", 
    blog: "Tips", 
    store: "Tienda", 
    profile: "Ver Perfil", 
    logout: "Cerrar sesión"
};

export default function Navbar(){

    const pathname = usePathname();
    const { data: session, status } = useSession();
    const { lives, points, streak } = useUserStats();

    return(
        status === 'loading' 
        ? <>
            <nav className="fixed top-0 flex flex-row flex-nowrap gap-5 items-center justify-between z-50 bg-gray-50 text-neutral-600 w-full h-[75px] px-5 overflow-hidden">
                <div className="h-3/5 w-[215px] roundeed-md bg-gray-300 opacity-75 animate-pulse"></div>
                <div className="h-3/5 w-[150px] rounded-md bg-gray-300 opacity-80 animate-pulse"></div>
            </nav>
        </>
        : <>
            <nav className="fixed top-0 flex flex-row flex-nowrap gap-3 lg:gap-5 items-center justify-between z-50 bg-gray-50 text-neutral-600 w-full h-[70px] md:h-[75px] md:px-5 overflow-hidden">
                <Link href={session ? '/home' : '/'}>
                    <Image 
                        src="/images/logos/Logotipo_h1.png"
                        alt="CashBoom Logo"
                        width={150}
                        height={150}
                        loading="lazy"
                        className="ml-2 sm:ml-0 w-[165px] sm:w-[180px] lg:w-[215px] h-auto flex-shrink-0"
                    />
                </Link>
                {session 
                    ? 
                        <>
                            <div className="flex flex-row flex-nowrap items-center gap-3 mr-3 md:hidden">
                                <span className="flex flex-row flex-nowrap items-center gap-1 text-[1.2rem] font-semibold text-neutral-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128">
                                        <path fill="#f44336" d="M93.99 8.97c-21.91 0-29.96 22.39-29.96 22.39s-7.94-22.39-30-22.39c-16.58 0-35.48 13.14-28.5 43.01s58.56 67.08 58.56 67.08s51.39-37.21 58.38-67.08c6.98-29.87-10.56-43.01-28.48-43.01"/>
                                        <path fill="#c33" d="M30.65 11.2c17.2 0 25.74 18.49 28.5 25.98c.39 1.07 1.88 1.1 2.33.06L64 31.35C60.45 20.01 50.69 8.97 34.03 8.97c-6.9 0-14.19 2.28-19.86 7.09c5.01-3.29 10.88-4.86 16.48-4.86m63.34-2.23c-5.29 0-10.11 1.15-13.87 3.47c2.64-1.02 5.91-1.24 9.15-1.24c16.21 0 30.72 12.29 24.17 40.7c-5.62 24.39-38.46 53.98-48.49 65.27c-.64.72-.86 1.88-.86 1.88s51.39-37.21 58.38-67.08c6.98-29.86-10.53-43-28.48-43"/>
                                        <path fill="#ff8a80" d="M17.04 24.82c3.75-4.68 10.45-8.55 16.13-4.09c3.07 2.41 1.73 7.35-1.02 9.43c-4 3.04-7.48 4.87-9.92 9.63c-1.46 2.86-2.34 5.99-2.79 9.18c-.18 1.26-1.83 1.57-2.45.46c-4.22-7.48-5.42-17.78.05-24.61m60.12 9.84c-1.76 0-3-1.7-2.36-3.34c1.19-3.02 2.73-5.94 4.58-8.54c2.74-3.84 7.95-6.08 11.25-3.75c3.38 2.38 2.94 7.14.57 9.44c-5.09 4.93-11.51 6.19-14.04 6.19"/>
                                    </svg>
                                    {lives}
                                </span>
                                <span className="flex flex-row flex-nowrap items-center gap-1 text-[1.2rem] font-semibold text-neutral-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" className="text-yellow-500">
                                        <path fill="currentColor" d="M264.4 95.01c-35.6-.06-80.2 11.19-124.2 34.09C96.27 152 61.45 182 41.01 211.3c-20.45 29.2-25.98 56.4-15.92 75.8c10.07 19.3 35.53 30.4 71.22 30.4c35.69.1 80.29-11.2 124.19-34c44-22.9 78.8-53 99.2-82.2c20.5-29.2 25.9-56.4 15.9-75.8c-10.1-19.3-35.5-30.49-71.2-30.49m91.9 70.29c-3.5 15.3-11.1 31-21.8 46.3c-22.6 32.3-59.5 63.8-105.7 87.8c-46.2 24.1-93.1 36.2-132.5 36.2c-18.6 0-35.84-2.8-50.37-8.7l10.59 20.4c10.08 19.4 35.47 30.5 71.18 30.5c35.7 0 80.3-11.2 124.2-34.1c44-22.8 78.8-52.9 99.2-82.2c20.4-29.2 26-56.4 15.9-75.7zm28.8 16.8c11.2 26.7 2.2 59.2-19.2 89.7c-18.9 27.1-47.8 53.4-83.6 75.4c11.1 1.2 22.7 1.8 34.5 1.8c49.5 0 94.3-10.6 125.9-27.1c31.7-16.5 49.1-38.1 49.1-59.9s-17.4-43.4-49.1-59.9c-16.1-8.4-35.7-15.3-57.6-20m106.7 124.8c-10.2 11.9-24.2 22.4-40.7 31c-35 18.2-82.2 29.1-134.3 29.1c-21.2 0-41.6-1.8-60.7-5.2c-23.2 11.7-46.5 20.4-68.9 26.1c1.2.7 2.4 1.3 3.7 2c31.6 16.5 76.4 27.1 125.9 27.1s94.3-10.6 125.9-27.1c31.7-16.5 49.1-38.1 49.1-59.9z"/>
                                    </svg>
                                    {points}
                                </span>
                                <span className="flex flex-row flex-nowrap items-center gap-1 text-[1.2rem] font-semibold text-neutral-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 16 16" className="text-green-700">
                                        <path fill="currentColor" d="M8 16c3.314 0 6-2 6-5.5c0-1.5-.5-4-2.5-6c.25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6c-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75c0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5c-.179 1-.25 2 1 3c.625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                                    </svg>
                                    {streak}
                                </span>
                            </div>
                            <div className="z-50 h-[70px] md:h-full -ml-1 sm:-ml-0 mr-0 sm:mr-2 md:mr-0 fixed flex flex-row flex-nowrap items-center justify-between bottom-0 md:static bg-gray-50 md:bg-transparent w-screen md:w-[70%]">
                                <LinkButtons pathname={pathname} />
                                <UserAvatar session={session} lives={lives} points={points} streak={streak} />
                            </div>
                        </>
                    : 
                        pathname !== "/login" 
                            ? <Button as={Link} href="/login" radius="sm"
                                className="flex flex-row flex-nowrap items-center gap-2 mr-3 md:mr-0 px-2 sm:px-6 py-2 border-b-2 border-transparent hover:border-green-600 rounded-none text-[1.1rem] sm:text-[1.2rem] bg-inherit text-green-600 font-semibold"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" d="M11 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1.293 6.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L13.586 13H5a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414" clipRule="evenodd"/>
                                </svg>
                                Iniciar sesión 
                            </Button> 
                            : ''}
            </nav>
        </>
    );
}

function LinkButtons({ pathname }: { pathname: string }){
    return(
        <>
            <div className="flex flex-row flex-nowrap gap-0 -space-x-2 sm:-space-x-0 lg:gap-5 h-full w-[80%] md:w-auto items-center object-contain">
                <NavLinkBtn isSelected={pathname === '/home'} redirectTo="/home"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="-mt-1 w-[35px] h-[35px] sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] flex-shrink-0">
                        <path fill="currentColor" d="M12 3s-6.186 5.34-9.643 8.232A1.04 1.04 0 0 0 2 12a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1a.98.98 0 0 0-.383-.768C18.184 8.34 12 3 12 3"/>
                    </svg>
                    <span className="hidden sm:inline-flex">{content.home}</span>
                </NavLinkBtn>
                <NavLinkBtn isSelected={pathname === '/challenges'} redirectTo="/challenges">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" className="w-[35px] h-[35px] sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] flex-shrink-0">
                        <path fill="currentColor" d="M384 42.667v64h85.333q-.874 77.24-24.271 108.943l-2.395 3.057q-18.81 22.572-64.215 32.088c-13.99 45.811-52.982 80.715-101.073 88.801c-.04.576-.046 1.176-.046 1.777c0 47.129 38.205 85.334 85.334 85.334v42.666H149.333v-42.666c47.128 0 85.334-38.205 85.334-85.334l-.046-1.777c-48.092-8.086-87.083-42.99-101.066-88.805q-45.414-9.511-64.222-32.084q-25.748-30.899-26.666-112H128v-64zM256 85.333l-24.661 58.624l-60.672 6.571l45.482 42.667L203.264 256L256 223.744L308.736 256l-12.885-62.72l45.482-42.667l-60.672-6.57zm-128 64H88.277l.463 3.072c2.736 17.512 6.934 29.937 11.975 37.119l1.396 1.828c3.936 4.724 11.335 9.173 22.297 12.91l3.592 1.135zm295.723 0H384v56.064l3.592-1.135c10.962-3.737 18.36-8.186 22.297-12.91l1.395-1.828c5.042-7.182 9.24-19.607 11.975-37.119z"/>
                    </svg>
                    <span className="hidden sm:inline-flex">{content.challenges}</span>
                </NavLinkBtn>
                <NavLinkBtn isSelected={pathname === '/store'} redirectTo="/store">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="w-[35px] h-[35px] sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] flex-shrink-0">
                        <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M2 4h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1m15 14c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"/>
                    </svg>
                    <span className="hidden sm:inline-flex">{content.store}</span>
                </NavLinkBtn>
                <NavLinkBtn isSelected={pathname === '/blog'} redirectTo="/blog">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 14 14" className="w-[27px] h-[27px] sm:w-[21px] sm:h-[21px] lg:w-[26px] lg:h-[26px] flex-shrink-0">
                        <path fill="currentColor" fillRule="evenodd" d="M6.998.046A6.954 6.954 0 1 1 4.099 13.32l-3.466.627a.5.5 0 0 1-.556-.668l.994-2.646A6.954 6.954 0 0 1 6.998.046m-.379 4.399A.995.995 0 1 1 7 6.36a.625.625 0 0 0-.625.625v1.08a.625.625 0 1 0 1.25 0V7.52a2.245 2.245 0 1 0-2.87-2.157a.625.625 0 0 0 1.25 0a.995.995 0 0 1 .614-.919ZM7 11.39a.895.895 0 0 1 .002-1.79h.002a.895.895 0 0 1-.002 1.79z" clipRule="evenodd"/>
                    </svg>
                    <span className="hidden sm:inline-flex">{content.blog}</span>
                </NavLinkBtn>
            </div>
        </>
    );
}

function UserAvatar({ session, lives, points, streak }: { session: Session, lives: number, points: number, streak: number }){
    return(
        <Dropdown shouldBlockScroll={false}>
            <DropdownTrigger>
                <Button variant="light" className="flex flex-row flex-nowrap items-center justify-center lg:gap-3 ml-auto sm:ml-0 sm:w-1/4 md:w-auto h-full px-0 md:px-4">
                    <div className="flex flex-row flex-nowrap items-center gap-2">
                        <span className="text-[0.9rem] lg:text-regular text-end text-wrap truncate font-medium text-neutral-800 hidden md:inline-flex">{session.user!.name}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024" className="hidden md:inline-flex">
                            <path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"/>
                        </svg>
                    </div>
                    <Avatar showFallback 
                        name={session.user!.name!} 
                        src={session.user!.image!} 
                        isBordered
                        className="flex-shrink-0 w-[42px] h-[42px] sm:w-[45px] sm:h-[45px] lg:w-[55px] lg:h-[55px] ring-[2px] ring-offset-2 ring-green-600" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu disabledKeys={['userStats']}>
                <DropdownItem key={'userStats'} isReadOnly 
                className="hidden md:inline opacity-100"
                >
                    <div className="w-full flex flex-row flex-nowrap items-center justify-center gap-3 hover:bg-transparent">
                        <span className="flex flex-row flex-nowrap items-center gap-1 text-[1.2rem] font-semibold text-neutral-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128">
                                <path fill="#f44336" d="M93.99 8.97c-21.91 0-29.96 22.39-29.96 22.39s-7.94-22.39-30-22.39c-16.58 0-35.48 13.14-28.5 43.01s58.56 67.08 58.56 67.08s51.39-37.21 58.38-67.08c6.98-29.87-10.56-43.01-28.48-43.01"/>
                                <path fill="#c33" d="M30.65 11.2c17.2 0 25.74 18.49 28.5 25.98c.39 1.07 1.88 1.1 2.33.06L64 31.35C60.45 20.01 50.69 8.97 34.03 8.97c-6.9 0-14.19 2.28-19.86 7.09c5.01-3.29 10.88-4.86 16.48-4.86m63.34-2.23c-5.29 0-10.11 1.15-13.87 3.47c2.64-1.02 5.91-1.24 9.15-1.24c16.21 0 30.72 12.29 24.17 40.7c-5.62 24.39-38.46 53.98-48.49 65.27c-.64.72-.86 1.88-.86 1.88s51.39-37.21 58.38-67.08c6.98-29.86-10.53-43-28.48-43"/>
                                <path fill="#ff8a80" d="M17.04 24.82c3.75-4.68 10.45-8.55 16.13-4.09c3.07 2.41 1.73 7.35-1.02 9.43c-4 3.04-7.48 4.87-9.92 9.63c-1.46 2.86-2.34 5.99-2.79 9.18c-.18 1.26-1.83 1.57-2.45.46c-4.22-7.48-5.42-17.78.05-24.61m60.12 9.84c-1.76 0-3-1.7-2.36-3.34c1.19-3.02 2.73-5.94 4.58-8.54c2.74-3.84 7.95-6.08 11.25-3.75c3.38 2.38 2.94 7.14.57 9.44c-5.09 4.93-11.51 6.19-14.04 6.19"/>
                            </svg>
                            {lives}
                        </span>
                        <span className="flex flex-row flex-nowrap items-center gap-1 text-[1.2rem] font-semibold text-neutral-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" className="text-yellow-500">
                                <path fill="currentColor" d="M264.4 95.01c-35.6-.06-80.2 11.19-124.2 34.09C96.27 152 61.45 182 41.01 211.3c-20.45 29.2-25.98 56.4-15.92 75.8c10.07 19.3 35.53 30.4 71.22 30.4c35.69.1 80.29-11.2 124.19-34c44-22.9 78.8-53 99.2-82.2c20.5-29.2 25.9-56.4 15.9-75.8c-10.1-19.3-35.5-30.49-71.2-30.49m91.9 70.29c-3.5 15.3-11.1 31-21.8 46.3c-22.6 32.3-59.5 63.8-105.7 87.8c-46.2 24.1-93.1 36.2-132.5 36.2c-18.6 0-35.84-2.8-50.37-8.7l10.59 20.4c10.08 19.4 35.47 30.5 71.18 30.5c35.7 0 80.3-11.2 124.2-34.1c44-22.8 78.8-52.9 99.2-82.2c20.4-29.2 26-56.4 15.9-75.7zm28.8 16.8c11.2 26.7 2.2 59.2-19.2 89.7c-18.9 27.1-47.8 53.4-83.6 75.4c11.1 1.2 22.7 1.8 34.5 1.8c49.5 0 94.3-10.6 125.9-27.1c31.7-16.5 49.1-38.1 49.1-59.9s-17.4-43.4-49.1-59.9c-16.1-8.4-35.7-15.3-57.6-20m106.7 124.8c-10.2 11.9-24.2 22.4-40.7 31c-35 18.2-82.2 29.1-134.3 29.1c-21.2 0-41.6-1.8-60.7-5.2c-23.2 11.7-46.5 20.4-68.9 26.1c1.2.7 2.4 1.3 3.7 2c31.6 16.5 76.4 27.1 125.9 27.1s94.3-10.6 125.9-27.1c31.7-16.5 49.1-38.1 49.1-59.9z"/>
                            </svg>
                            {points}
                        </span>
                        <span className="flex flex-row flex-nowrap items-center gap-1 text-[1.2rem] font-semibold text-neutral-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 16 16" className="text-green-700">
                                <path fill="currentColor" d="M8 16c3.314 0 6-2 6-5.5c0-1.5-.5-4-2.5-6c.25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6c-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75c0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5c-.179 1-.25 2 1 3c.625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                            </svg>
                            {streak}
                        </span>
                    </div>
                </DropdownItem>
                <DropdownItem key={'profile'} className="text-neutral-800 font-medium flex flex-row flex-nowrap ">
                    <Button variant="light" onPress={() => signOut({
                        redirectTo: "/login"
                    })}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H10a1 1 0 1 1 0-2h8.586l-2.293-2.293a1 1 0 0 1 0-1.414" clipRule="evenodd"/>
                        </svg>
                        {content.logout}
                    </Button>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}