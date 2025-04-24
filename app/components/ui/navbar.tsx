"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const content = {
    home: "Inicio", 
    challenges: "Retos", 
    blog: "Blog", 
    store: "Tienda", 
    profile: "Ver Perfil", 
    logout: "Cerrar sesión"
};

export default function Navbar(){

    const pathname = usePathname();

    return(
        <>
            <nav className="fixed top-0 flex flex-row flex-nowrap gap-5 items-center z-50 bg-gray-50 text-neutral-600 w-full h-[70px] px-5 overflow-hidden">
                <a href="/home">
                    <Image 
                        src="/images/logos/Logotipo_h1.png"
                        alt="CashBoom Logo"
                        width={150}
                        height={150}
                        loading="lazy"
                        className="w-[215px] h-auto"
                    />
                </a>
                <a href="/home" className={`flex flex-col md:flex-row gap-1  font-semibold text-[1.4rem] ${pathname === '/home' ? 'text-green-700' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 3s-6.186 5.34-9.643 8.232A1.04 1.04 0 0 0 2 12a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1a.98.98 0 0 0-.383-.768C18.184 8.34 12 3 12 3"/>
                    </svg>
                    {content.home}
                </a>
            </nav>
        </>
    );
}