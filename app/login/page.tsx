import Image from "next/image";
import GoogleLoginBtn from "../components/ui/loginBtn";
import { Input, Button } from "@heroui/react";

export default async function Page() {

    return (
        <main className="flex flex-col-reverse bg-gray-50 items-center justify-start md:flex-row md:items-center gap-5 sm:pt-0 md:pt-10 md:gap-10 md:justify-center w-full md:w-auto h-auto md:h-screen mx-auto">
            <Image
                src="/images/common/login-img.svg"
                alt="Login Image"
                width={200}
                height={200}
                className="md:h-full w-[380px] sm:w-4/5 md:w-[50%] lg:w-[40%] object-contain"
                loading="lazy"
            />
            <div className="flex flex-col items-center justify-center gap-5 pt-7 sm:pt-6 md:pt-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-5 md:h-full">
                <Image
                    src="/images/logos/Logotipo_v1.png"
                    alt="CashBoom Logo"
                    width={350}
                    height={200}
                    loading="lazy"
                    className="object-contain w-[200px] h-auto lg:w-[250px]" />
                <p className="flex flex-col gap-3 justify-center text-center text-regular">
                    <strong className="text-h5">
                        ¡Bienvenido a Cash Boom!
                    </strong>
                    Aprende finanzas de manera divertida y efectiva. 
                </p>
                <div className="flex flex-col items-center gap-3 w-full">
                    <Input label="Correo electrónico..." variant="bordered" radius="sm" fullWidth={true} type="email" isRequired
                        classNames={{
                            label: "text-[1.1rem]",
                            input: "text-[1.05rem] text-neutral-900"
                        }} />
                    <Input label="Contraseña..." variant="bordered" radius="sm" fullWidth={true} type="password" isRequired
                        classNames={{
                            label: "text-[1.1rem]",
                            input: "text-[1.05rem] text-neutral-900"
                        }} />
                    <Button radius="sm" fullWidth size="lg" className="bg-green-600 text-white text-[1.25rem] font-medium drop-shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M11 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1.293 6.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L13.586 13H5a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414" clipRule="evenodd"/>
                        </svg>
                        Iniciar sesión
                    </Button>
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-2 w-full">
                    <div className="h-[1.2px] w-full bg-neutral-500/50 rounded-full" />
                    <p className="text-nowrap text-neutral-500">o continúa con</p>
                    <div className="h-[1.2px] w-full bg-neutral-500/50 rounded-full" />
                </div>
                <GoogleLoginBtn />
            </div>
        </main>
    );
}
