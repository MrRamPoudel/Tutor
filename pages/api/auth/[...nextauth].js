import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt"
import prisma from "@/libs/prisma"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.auth.findUnique({
          where: { email: credentials.email },
          include: { student: true },
        });

        if (!user) {
          throw new Error("No user found");
        }

        if (user.password !== credentials.password) {
          throw new Error("Invalid password");
        }

        // Check if the user is a tutor
        const tutor = await prisma.tutor.findUnique({
          where: { sid: user.student.sid },
        });

        const role = tutor ? "tutor" : "student";

        return {
          email: user.email,
          fname: user.student.fname,
          lname: user.student.lname,
          id: user.student.sid,
          role: role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === 'development',
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_JWT_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.fname = user.fname;
        token.lname = user.lname;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.user.email = token.email;
      session.user.id = token.id;
      session.user.name = `${token.fname} ${token.lname}`;
      session.user.role = token.role;
      return session;
    },
  },
});