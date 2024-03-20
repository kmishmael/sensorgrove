import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/login'
    },
    callbacks: {
        async jwt({ token, account, profile }) {
            console.log('jwt ->', token, account, profile)
            if (account && account.type === "credentials") { //(2)
                token.userId = account.providerAccountId; // this is Id that coming from authorize() callback 
            }
            return token;
        },
        async session({ session, token, user }) {
            console.log('session', session, token, user)
            session.user.id = token.userId; //(3)
            return session;
        },
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials: any) {
                const authResponse = await fetch(process.env.API_URL + "/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                })

                if (!authResponse.ok) {
                    return null
                }

                const user = await authResponse.json()

                return user
            },
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
        }),
    ],
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 Days
    },

}
