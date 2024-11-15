import { AuthService } from "@/app/infrastructure";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthToken {
  id?: string;
  token?: string;
  name?: string,
  email: string;



}

interface AuthUser {
  id: string;
  email: string;
  token: string;
  name?: string,
}

export interface CustomSession extends Session {
  user: {
    id?: string;
    token?: string;
    email?: string | null;
    name?: string,
  };
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Correo Electrónico", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      authorize: async (credentials) => {

        if (!credentials?.password || !credentials.email) {
          console.error("Credenciales faltantes")
          return null
        }
        try {
          const authService = new AuthService()
          const response = await authService.login( {
            password: credentials.password,
            email: credentials.email
          })
    
          return {
            email: response.data.user.email,
            id: response.data.user.id.toString(),

          } as AuthUser

        } catch (error) {
          return Promise.reject(new Error(JSON.stringify(error)))
        }
      },
    }),

  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authUser = user as AuthUser;
        token.id = authUser.id;
        token.token = authUser.token;
      }
      return token;
    },
    async session({ session, token }) {
      const customSession = session as CustomSession;
      customSession.user.id = (token as AuthToken).id;
      customSession.user.token = (token as AuthToken).token;
      return customSession;
    },
  },
  pages:{
    signIn: '/login',
  }
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
