import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./database/mongoClientPromise";
import CredentialProvider from "next-auth/providers/credentials";
import { userModel } from "./models/users-model";
import bcrypt from "bcryptjs";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise, { databaseName: "test" }),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          const foundUser = await userModel.findOne({
            email: credentials.email,
          }); 
          
          if (foundUser) {
            const isMatched = bcrypt.compare(
              credentials.password,
              foundUser.password
            );
            if (isMatched) {
              return foundUser;
            } else {
              throw new Error("Email or password mismatched");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
