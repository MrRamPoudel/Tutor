import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const loading = status === "loading";

    useEffect(() => {
      if (!loading && !session) {
        router.replace("/auth");
      }
    }, [loading, session, router]);

    if (loading || !session) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;