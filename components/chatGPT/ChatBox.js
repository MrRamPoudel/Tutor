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
    <div className='text-gray-900'>
      <h2>Ask me a question!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">Enter a question:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Get Answer</button>
      </form>
      <div className='pt-8'>
        <label>ChatGPT:</label>
        {answer && <div className="">{answer}</div>}
      </div>
    </div>
  );
};

export default ChatGPT;