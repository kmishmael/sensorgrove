import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from 'next-auth/providers/google'
import { NextAuthOptions } from 'next-auth';
import axios from '@/lib/axios/public'

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
        /*
        async signIn({ user, account, profile, email, credentials }) {

            if (account?.provider == 'credentials') {
                return true
            }
            else if (account?.provider == 'google') {
                const res = await axios.post('/users', { email: profile?.email })
                console.log('response=> ', res.status)
                console.log('resdata => ', res.data)

                axios.post('/account', {
                    userId: account.userId,
                    type: account.type,
                    provider: account.provider,
                    providerAccountId: account.providerAccountId,
                    refresh_token: account.refresh_token,
                    access_token: account.access_token,
                    expires_at: account.expires_at,
                    token_type: account.token_type,
                    scope: account.scope,
                    id_token: account.id_token,
                })

                return true
            }

            console.log('USER => ', user)
            console.log('ACCOUNT => ', account)
            console.log('PROFILE => ', profile)
            console.log('EMAIL => ', email)
            console.log('CREDENTIALS => ', credentials)
            return true
        },
        */
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
        GoogleProvider({
            clientId: process.env.GOOGLE_AUTH_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET || '',
        }),

    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 Days
    },

}
