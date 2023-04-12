import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function useAuth(redirectTo = false) {
  const router = useRouter();
  const { data: session } = useSession();

  if (redirectTo && session) {
    router.push(redirectTo);
  }

  return session;
}