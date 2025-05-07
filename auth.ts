import NextAuth from "next-auth";
import { Provider } from "next-auth/providers";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { User } from "next-auth";

const providers: Provider[] = [
  Google({
    clientId: process.env.AUTH_GOOGLE_ID!, 
    clientSecret: process.env.AUTH_GOOGLE_SECRET!
  }), 
  Credentials({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials): Promise<User | null> {
      if (!credentials?.email || typeof credentials.email !== 'string') return null;

      // Crear un usuario con los datos proporcionados
      return {
        id: Math.random().toString(36).substring(7),
        name: credentials.email.split('@')[0],
        email: credentials.email,
        image: "/images/common/default-avatar.png"
      };
    }
  })
];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  });
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    }
  }
});