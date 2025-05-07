'use client';

import { Input, Button } from "@heroui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();

    const handleCredentialsLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const result = await signIn('credentials', {
            email,
            password,
            redirectTo: "/home"
        });

        if (result?.ok) {
            router.push('/home');
        }
    };

    return (
        <form onSubmit={handleCredentialsLogin} className="flex flex-col items-center gap-3 w-full">
            <Input 
                name="email"
                label="Correo electrónico..." 
                variant="bordered" 
                radius="sm" 
                fullWidth={true} 
                type="email" 
                isRequired
                defaultValue="demo@cashboom.com"
                classNames={{
                    label: "text-[1.1rem]",
                    input: "text-[1.05rem] text-neutral-900"
                }} 
            />
            <Input 
                name="password"
                label="Contraseña..." 
                variant="bordered" 
                radius="sm" 
                fullWidth={true} 
                type="password" 
                isRequired
                classNames={{
                    label: "text-[1.1rem]",
                    input: "text-[1.05rem] text-neutral-900"
                }} 
            />
            <Button 
                type="submit"
                radius="sm" 
                fullWidth 
                size="lg" 
                className="bg-green-600 text-white text-[1.25rem] font-medium drop-shadow-md"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M11 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1.293 6.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L13.586 13H5a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414" clipRule="evenodd"/>
                </svg>
                Iniciar sesión
            </Button>
        </form>
    );
} 