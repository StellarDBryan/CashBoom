import NextAuth from "next-auth";
import { Provider } from "next-auth/providers";
import Google from "next-auth/providers/google";

const providers: Provider[] = [
  Google({
    clientId: process.env.AUTH_GOOGLE_ID!, 
    clientSecret: process.env.AUTH_GOOGLE_SECRET!
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
  providers
});