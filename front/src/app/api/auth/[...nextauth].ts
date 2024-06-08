import NextAuth from 'next-auth';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import {redisClient} from '../../../services/redis/redis_client';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // ユーザーデータをUpstashに保存
      await redisClient.set(`user:${user.id}`, JSON.stringify(user));
      return true;
    },
    async session({ session, token, user }) {
      // セッション情報を必要に応じてカスタマイズ
      return session;
    },
  },
};

export default NextAuth(authOptions);
