import nextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { authService } from "@/service/auth.service";

export const authOption = {
  providers: [
    // Login By Email And Password
    CredentialProvider({
      async authorize(userInfo) {
        console.log("userinfo in route.js", userInfo);
        const newUserInfo = {
          email: userInfo.email,
          password: userInfo.password,
        }
        const login = await authService(newUserInfo);
        if (login.status == 400) {
          return;
        } else {
          return login;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
