import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ChatRoom({socket, name, roomID}){
    //current message
    const [message, setMessage] = useState("");
    //save all messages
    const [allMessages, setAllMessage] = useState([]);
    
    const scrollContainerRef = useRef(null);
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
    
    //auto scroll
    useEffect(() => {
        if(scrollContainerRef.current){
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
    }, [message]);
    return (

            <div className="container mx-auto shadow-lg rounded-lg">

                <div className="flex h-[85vh] flex-row justify-between bg-white">
                <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
                    <div className="border-b-2 py-4 px-2">
                    <input
                        type="text"
                        placeholder="search chatting"
                        className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                    />
                    </div>
        
                    <div
                    className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400"
                    >
                    <div className="w-1/4">
                        <img
                        src="https://friconix.com/png/fi-cnluxx-anonymous-user-circle.png"
                        className="object-cover h-12 w-12 rounded-full"
                        alt=""
                        />
                    </div>
                    <div className="w-full">
                        <span className="text-gray-500">
                            {allMessages.length > 0 ? (
                                <>
                                {allMessages[allMessages.length - 1].name}: {allMessages[allMessages.length - 1].message}
                                </>
                            ) : (
                                'No messages available'
                            )}
                        </span>
                    </div>
                    </div>
                    <div className="flex flex-row py-4 px-2 items-center border-b-2">
                    
                    {/*                
                    <div className="w-full">
                        <div className="text-lg font-semibold">Javascript Indonesia</div>
                        <span className="text-gray-500">Evan : some one can fix this</span>
                    </div>*/}

                    </div>

                </div>
                <div className="w-full px-5 flex flex-col justify-between">
                    <div className="flex flex-col mt-5 overflow-y-auto" ref={scrollContainerRef}>
                            {allMessages.map(eachMessage => (
                            <div className={` flex mb-4 items-end ${
                                eachMessage.name === name
                                    ? "justify-end"
                                    : "justify-start"
                                }`}>
                                <span className="text-gray-500">
                                {eachMessage.name !== name ? (<>{eachMessage.name}:</>) : ('')}
                                </span>
                                <div className={` break-words text-white py-3 px-4 max-w-[50%] ${
                                    eachMessage.name === name
                                        ? "mr-2 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl"
                                        : "ml-2 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl"
                                    }`}>{eachMessage.message}
                                </div>
                            </div>
                            ))}
                    </div>
                    <div className="py-5 flex">
                        <input type="text" 
                        value = {message}
                        placeholder="Hello!" 
                        onChange={(event)=>setMessage(event.target.value)} 
                        onKeyDown ={(event)=>event.key === 'Enter' && sendMessage()}
                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-black">
                        </input>

                        <button onClick={sendMessage}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            </div>
    );
}