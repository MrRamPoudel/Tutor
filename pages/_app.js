import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import SocketContext from "../contexts/SocketContext";

export default function MyApp({ Component, pageProps }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3001");
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <SocketContext.Provider value={socket}>
        <Component {...pageProps} />
      </SocketContext.Provider>
    </SessionProvider>
  );
}