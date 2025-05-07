import Image from "next/image";
import GoogleLoginBtn from "../components/ui/loginBtn";
import LoginForm from "./LoginForm";

export default function Page() {
    return (
        <main className="flex flex-col-reverse bg-gray-50 items-center justify-start md:flex-row md:items-center gap-5 md:gap-10 md:justify-center w-full md:w-auto h-auto md:h-screen mx-auto">
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
                <LoginForm />
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
