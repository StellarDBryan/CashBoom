import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";


export function NavLinkBtn({ children, isSelected, redirectTo }: { 
    children: React.ReactNode, 
    isSelected: boolean, 
    redirectTo: string}
) {
    return(
        <>
            <Button
                as={Link} 
                href={redirectTo}
                radius="none"
                className={`p-0 md:px-2 w-1/4 sm:w-full md:w-auto h-full flex flex-col md:flex-row gap-1 items-center justify-center m-0 font-semibold text-[0.7rem] sm:text-regular md:text-[1rem] lg:text-[1.4rem] text-inherit bg-transparent border-b-3 border-b-green-700/0 ${isSelected ? 'text-green-700 border-b-green-700/100' : ''} hover:text-green-700 hover:border-b-green-700/100 transition-all ease-in-out duration-200`}
            >
                { children }
            </Button>
        </>
    );
}