//Legacy
import React,{useState} from "react";
import Tutor from "@/components/layout/tutor";


export default function Chat(){
const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    console.log(`Sending message: ${message}`);
    setMessage("");
  };

  return (
<div className="flex h-screen bg-gray-200">
      <div className="flex-1 bg-gray-200"></div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/4 lg:w-1/2 bg-white rounded-lg shadow-lg">
        <div className="bg-slate-400 h-16 flex items-center justify-left rounded-t-lg w-full">
          <Tutor fname="Ram" lname="poudel"/>
        </div>
        <div className="flex-1 p-4 overflow-y-auto text-black">
          <h3> {message}</h3>
        </div>
        <div className="h-20 flex items-center justify-between bg-slate-400 rounded-b-lg w-full">
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type a message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
          <button onClick={handleSendMessage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>

          </button>
        </div>
      </div>
      <div className="flex-1 bg-gray-200"></div>
    </div>
  );
}
