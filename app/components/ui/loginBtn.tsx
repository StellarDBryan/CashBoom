import { signIn } from "@/auth";

export default function SignInBtn() {
    return (
        <form
        action={async () => {
            "use server"
            await signIn("google")
        }}
        >
            <button type="submit">Inicia con Google</button>
        </form>
    );
}