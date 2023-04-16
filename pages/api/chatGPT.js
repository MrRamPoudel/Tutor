import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt missing' });
  }

  if (prompt.length > 100) {
    return res.status(400).json({ error: 'Prompt too long' });
  }

  try {
    const completion = await openai.Completion.create({
      engine: 'text-davinci-003',
      prompt: `Create a cringy motivational quote based on the following topic.\n
      Topic: ${prompt}\n
      Cringy motivational quote:`,
      max_tokens: 500,
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
    });

    res.status(200).json(completion.choices[0]);
  } catch (error) {
    console.error('Error creating completion:', error);
    res.status(500).json({ error: 'Error creating completion' });
  }
}