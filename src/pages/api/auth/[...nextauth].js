import NextAuth from "next-auth";

import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "456cfe39feb2b2cc0631",
      clientSecret: "c831bd4156e59a6334009c97de55fb47592375d9",
    }),
  ],
});
