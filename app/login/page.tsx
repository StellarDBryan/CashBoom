
import Image from "next/image";
import GoogleLoginBtn from "../components/ui/loginBtn";

export default async function Page() {

    return (
        <main className="flex flex-col md:flex-row md:items-center gap-10 md:justify-center h-screen mx-auto">
            <Image
                src="/images/common/login-img.svg"
                alt="Login Image"
                width={200}
                height={200}
                className="h-full w-[40%] object-contain"
                loading="lazy"
            />
            <div className="flex flex-col items-center justify-center gap-2 w-1/3 p-5 h-full border border-solid border-black">
                <h2 className="text-h2 font-semibold text-green-600">CashBoom</h2>
                <p className="flex flex-col gap-3 justify-center text-center">
                    <strong className="text-h5">
                        ¡Bienvenido a Cash Boom!
                    </strong>
                    Aprende finanzas de manera divertida y efectiva. 
                </p>
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
