import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from 'next/headers'


export const authOptions = {
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                const { email, password } = credentials;
                const signInResponse = await fetch(process.env.BACKEND_SIGN_IN_URL, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password
                    }),
                });

                const response = await signInResponse;
                const setCookieValue = response.headers.get('set-cookie');

                const accessTokenMatch = setCookieValue.match(/accessToken=([^;]+)/);
                if (accessTokenMatch && accessTokenMatch[1]) {
                    cookies().set({
                        name: "accessToken",
                        value: accessTokenMatch[1],
                        httpOnly: true,
                        maxAge: process.env.ACCESS_TOKEN_LIFETIME, // seconds
                        path: "/"
                    })
                }

                const refreshTokenMatch = setCookieValue.match(/refreshToken=([^;]+)/);
                if (refreshTokenMatch && refreshTokenMatch[1]) {
                    cookies().set({
                        name: "refreshToken",
                        value: refreshTokenMatch[1],
                        httpOnly: true,
                        maxAge: process.env.REFRESH_TOKEN_LIFETIME, // seconds
                        path: "/"
                    })
                }

                const user = response.json();
                if (response.ok && user) return user;
                return null;
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },

    pages: {
        signIn: "/sign-in"
    },
    session: {
        strategy: "jwt"
    },

    debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };