//Legacy
import React , {useState, useEffect} from "react";
import Tutor from "./layout/tutor";
export default function ChatBox({socket, name, roomID}) {
    //current message
    const [message, setMessage] = useState("");
    //save all messages
    const [allMessages, setAllMessage] = useState([]);
    
    async function sendMessage(){
        //We want to send the name, roomID, message
        if(message !== ""){
            const data ={
                roomID: roomID,
                name: name,
                message:message,
            };
            //send message
            await socket.emit("sendMessage", data);
            //Add current message to the list of previous message
            setAllMessage(list =>[...list, data]);
            setMessage("");
        }
    }

    //update list each time we receive message
    useEffect(() => {
        
        //add messages to a list
        socket.on("receiveMsg", (data) =>{
            setAllMessage(list => [...list, data]);
        });
    }, [socket]);


    return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex-1 bg-gray-200"></div>
      <div className="flex flex-col justify-center  w-full md:w-1/4 lg:w-1/2 bg-white rounded-lg shadow-lg">
        <div className="bg-slate-400 h-16 flex items-center justify-left rounded-t-lg w-full">
          <Tutor fname={name}/>
        </div>
        <div className="flex-1 p-4 overflow-y-auto text-black">
        {allMessages.map(eachMessage => (
          <h2 className={`p-2 rounded-md  ${
              eachMessage.name === name
                ? "text-right bg-blue-300 ml-auto text-teal-950"
                : "text-left bg-gray-300 mr-auto text-gray-700"
              }`}>{eachMessage.message}</h2>))}
        </div>
        <div className="h-20 flex items-center justify-between bg-slate-400 rounded-b-lg w-full">
        <input type="text" 
        value = {message}
         placeholder="Hello!" 
         onChange={(event)=>setMessage(event.target.value)} 
         onKeyDown ={(event)=>event.key === 'Enter' && sendMessage()}
         className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-black">
         </input>

          <button onClick={sendMessage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>

          </button>
        </div>
      </div>
      <div className="flex-1 bg-gray-200"></div>
    </div>
  )

}