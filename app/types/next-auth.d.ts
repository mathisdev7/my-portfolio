import "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      email: string;
      image: string;
      id: string;
      name: string;
      role: string;
      username: string;
    };
  }
}
