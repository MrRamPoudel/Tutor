import { useRouter } from "next/router";
import { useContext } from "react";
import { useSession } from "next-auth/react";
import SocketContext from "@/contexts/SocketContext";
import ChatBox from "@/components/Chatbox";


export default function Room(){
    const router = useRouter();
    const {id} = router.query;
    console.log(router.query)
    if(!isNaN(id)){
        const socket = useContext(SocketContext);
        const { data: session, status } = useSession();
        //join the user to the room
        const name = session.user.name;
        if (name !== ""){
            socket.emit("roomID", id);
        return (
        <ChatBox socket = {socket} name = {name} roomID = {id} />
        );
        }

    }

};