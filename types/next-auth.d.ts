import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: DefaultUser;
  }

  interface DefaultUser {
    id: string;
    name: string;
    email: string;
    token: string;
  }
}
