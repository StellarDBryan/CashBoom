import { Button } from "@heroui/react";
import React from "react";


export function NavLinkBtn({ children, isSelected }: { children: React.ReactNode, isSelected: boolean}) {

    return(
        <>
            <Button
                radius="none"
                className={`h-full flex flex-col md:flex-row gap-1 items-center justify-center m-0 font-semibold text-[1.4rem] text-inherit bg-transparent border-b-3 border-b-green-700/0 ${isSelected ? 'text-green-700 border-b-green-700/100' : ''} hover:text-green-700 hover:border-b-green-700/100 transition-all ease-in-out duration-200`}
            >
                { children }
            </Button>
        </>
    );
}