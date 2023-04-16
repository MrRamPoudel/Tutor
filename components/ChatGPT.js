import { useState } from 'react';

const CringyQuoteGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [quote, setQuote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/chatGPT?prompt=${encodeURIComponent(prompt)}`);
      const data = await response.json();
      setQuote(data.text);
    } catch (error) {
      setQuote('An error occurred while generating the cringy quote.');
    }
  };

  return (
    <div>
      <h1>Cringy Motivational Quote Generator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">Enter a topic:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Generate Quote</button>
      </form>
      {quote && <div className="quote">{quote}</div>}
    </div>
  );
};

export default CringyQuoteGenerator;