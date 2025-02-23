import type { DefaultSession, Session } from "next-auth";
import NextAuth, { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import NaverProvider from "next-auth/providers/naver";

// session.user 타입 확장
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      accessToken: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, account, profile }): Promise<JWT> {
      if (account && profile) {
        return {
          ...token,
          accessToken: account.access_token,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          id: (profile as any).id, // 네이버 프로필 타입이 명확하지 않으므로 any 처리
          name: profile.name,
          email: profile.email,
        };
      }
      return token;
    },

    async session({ session, token }): Promise<Session> {
      if (session.user) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id as string,
            accessToken: token.accessToken as string,
          },
        };
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
