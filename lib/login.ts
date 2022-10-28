import { useSession } from "next-auth/react";

export default function isUserLoggedIn() {
  const { data: session, status } = useSession();
  if (status !== "authenticated") {
    return false;
  }
  return true;
}
