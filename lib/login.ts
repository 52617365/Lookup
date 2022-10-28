import { useSession } from "next-auth/react";

export default function isUserLoggedIn() {
  const { data: session } = useSession();
  if (!session) {
    return false;
  }
  return true;
}
