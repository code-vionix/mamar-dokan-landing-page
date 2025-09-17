import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        try {
          const { email, password } = credentials ?? {};
          if (!email || !password) {
            throw new Error("Email and password are required");
          }

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email,
                password,
              }),
            }
          );

          const data = await res.json().catch(() => null);
          // Optional: log in dev only
          if (process.env.NODE_ENV !== "production") {
            console.debug("/auth/login response:", { status: res.status, data });
          }

          if (!res.ok) {
            const message = data?.message || "Invalid credentials";
            // Throwing an Error lets NextAuth show the message on the sign-in page (?error=...)
            throw new Error(message);
          }

          const user = data?.data?.user;
          console.log(user)
          const accessToken = data?.data?.accessToken;

          if (!user || !accessToken) {
            throw new Error("Invalid credentials");
          }

          return {
            id: user.id,
            name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
            email: user.email,
            image: user.avatarUrl,
            role: user.role,
            accessToken,
          };
        } catch (err) {
          // Returning null triggers CredentialsSignin generic error. Throw to pass custom message.
          if (err instanceof Error) throw err;
          throw new Error("Sign in failed");
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        // Call your backend /auth/oauth-login to create/update user and get tokens
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/oauth-login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: user.email,
              name: user.name,
              image: user.image,
            }),
          }
        );

        if (!res.ok) return false; // signIn failed

        const data = await res.json();

        // Attach backend tokens/user data to user object to use in jwt callback
        user.id = data.data.user.id;
        user.role = data.data.user.role;
        user.accessToken = data.data.accessToken;
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
        token.role = user.role;
        token.accessToken = user.accessToken || null;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
          image: token.image,
          role: token.role,
          accessToken: token.accessToken,
        };
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});