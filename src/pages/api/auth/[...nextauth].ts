import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { apiurl } from "@/services/api";

export const authOptions: NextAuthOptions = {
  // TODO @dinhostork configure login providers here
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as any;
        try {
          const res = await fetch(`${apiurl}/auth`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });

          if (!res.ok) {
            const response = await res.json();
            throw response.error;
          }

          const user = await res.json();
          return user;
        } catch (error) {
          throw new Error(error as string);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      }
    },
    async session({ session, token, user }) {

      session.user = {
        id: token.id as string,
        name: token.name as string,
        email: token.email,
        token: token.token as string,
      };

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
