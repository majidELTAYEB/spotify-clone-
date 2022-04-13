import NextAuth from "next-auth"
import Spotifyprovider from "next-auth/providers/spotify"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Spotifyprovider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
})
