import { useEffect, useState } from 'react'

const ChatGPT = () => {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/chatGPT?prompt=${encodeURIComponent(prompt)}`);
      const answer = await response.json();
      console.log(answer);
      setAnswer(answer);
    } catch (error) {
      setAnswer('An error occurred while generating the answer.');
    }
  };

  return (
    <div className="container mx-auto shadow-lg rounded-lg">
      <div className="flex h-[85vh] flex-row justify-between bg-white">
        <div className="w-full px-5 flex flex-col justify-between">
          <div className="flex flex-col mt-5">

            <div className="flex mb-4 items-end justify-start">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png" className='h-10 w-10'/>
              <div className="break-words text-white py-3 px-4 max-w-[50%] ml-2 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl" >
                {answer && <div className="">{answer}</div>}
              </div>
            </div>

          </div>
          <div className="py-5 flex">
            <input
              type="text"
              id="prompt"
              value={prompt}
              placeholder="Ask me something" 
              onChange={(e) => setPrompt(e.target.value)}
              //onKeyDown ={(e)=>e.key === 'Enter' && handleSubmit()}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
            <button onClick={handleSubmit}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGPT;