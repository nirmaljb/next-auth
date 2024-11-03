import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                otp: { label: "otp", type: "otp" }
            },

            async authorize(credentials) {
                console.log('authorization...')
                console.log(credentials)

                try {
                    if(!credentials?.username || !credentials?.password) {
                        return null;
                    }
                    return {
                        id: '1',
                        name: 'Nirmal',
                        email: 'njb@gmail.com'
                    }
                }catch(err) {
                    console.error(err);
                    return null;
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })

    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log('jwt...')
            console.log(token);

            token.userId = token.sub;

            return token;
        },
        async session({ session, token, user }: any) {
            console.log("Gotten token: ", token);
            session.user.id = token.userId;

            return session;
        }
    },
    pages: {
        signIn: '/signin'
    }
};