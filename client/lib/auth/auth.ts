import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from 'next-auth/providers/google'
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/login'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = (user as any).accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken
            //session.user.id = token.userId as string;
            //session.user.email = token.email as string;
            //session.user.name = token.name;
            //session.accessToken = token.accessToken as string;
            return session;
        },
        async signIn({ user, account, profile, email, credentials }) {
            console.log('USER => ',user)
            console.log('ACCOUNT => ',account)
            console.log('PROFILE => ',profile)
            console.log('EMAIL => ', email)
            console.log('CREDENTIALS => ',credentials)
            return true
        },
    },
    // async signIn(user, account, profile) {
    //     // Handle response from Go backend (user info and session identifier)
    //     const response = await fetch("https://your-go-backend.com/api/get-session", {
    //         method: "POST",
    //         body: JSON.stringify({ accessToken: account.accessToken }),
    //     });
    //     const sessionData = await response.json();

    //     if (sessionData.success) {
    //         return {
    //             user: {
    //                 // Extract user information from sessionData
    //                 id: sessionData.user.id,
    //                 name: sessionData.user.name,
    //                 email: sessionData.user.email,
    //                 // ...other user details
    //             },
    //             session: {
    //                 accessToken: sessionData.accessToken, // Or other session identifier
    //             },
    //         };
    //     } else {
    //         // Handle login failure
    //         throw new Error("Failed to create session");
    //     }
    // },
    providers: [
        CredentialsProvider({
            async authorize(credentials: any) {
                const authResponse = await fetch(process.env.API_URL + "login", {
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
        GoogleProvider({
            clientId: process.env.GOOGLE_AUTH_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET || '',
            authorization: {
                url: "https://sensorgrove-api-kmishmael.koyeb.app/auth/google",
            },
        }),

    ],
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 Days
    },

}
