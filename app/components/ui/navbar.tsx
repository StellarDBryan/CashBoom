"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { NavLinkBtn } from "./buttons";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";

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
                <Link href="/home">
                    <Image 
                        src="/images/logos/Logotipo_h1.png"
                        alt="CashBoom Logo"
                        width={150}
                        height={150}
                        loading="lazy"
                        className="ml-2 sm:ml-0 w-[175px] sm:w-[180px] lg:w-[215px] h-auto flex-shrink-0"
                    />
                </Link>
                {session 
                    ? 
                        <div className="z-50 h-[70px] md:h-full -ml-1 sm:-ml-0 mr-0 sm:mr-2 md:mr-0 fixed flex flex-row flex-nowrap items-center justify-between bottom-0 md:static bg-gray-50 md:bg-transparent w-screen md:w-[70%]">
                            <LinkButtons pathname={pathname} />
                            <UserAvatar session={session} />
                        </div>
                    : 
                        pathname !== "/login" 
                            ? <Button as={Link} href="/login" radius="sm">
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

function UserAvatar({ session }: { session: Session }){
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
            <DropdownMenu>
                <DropdownItem key={'profile'}>
                    <Button variant="light" as={Link} href="/profile" className="text-neutral-800 font-medium flex flex-row flex-nowrap ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clipRule="evenodd"/>
                        </svg>
                        {content.profile}
                    </Button>
                </DropdownItem>
                <DropdownItem key={'profile'} className="text-neutral-800 font-medium flex flex-row flex-nowrap ">
                    <Button variant="light" onPress={() => signOut()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H10a1 1 0 1 1 0-2h8.586l-2.293-2.293a1 1 0 0 1 0-1.414" clipRule="evenodd"/>
                        </svg>
                        {content.logout}
                    </Button>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}