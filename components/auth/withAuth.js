import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const withAuth = (WrappedComponent, reverse = false) => {
  return (props) => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const loading = status === "loading";

    useEffect(() => {
      if (!loading) {
        if (reverse && session) {
          router.replace("/");
        } else if (!reverse && !session) {
          router.replace("/auth");
        }
      }
    }, [loading, session, router]);

    if (loading || !session) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;