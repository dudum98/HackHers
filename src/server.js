// server.js

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors'); // Import CORS
const OpenAI = require('openai'); // Import OpenAI

const app = express();
const PORT = process.env.PORT || 5001; // Use port from environment or default to 5000

// OpenAI Configuration
const openai = new OpenAI({
  apiKey: "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"
});

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  console.log('Received message:', message); // Log the received message

  if (!message) {
    return res.status(400).json({ reply: "No message provided." });
  }

  const messages = [
    {
      role: 'system',
      content: "You are a supportive assistant for new mothers. Respond positively and provide helpful advice, congratulations, and encouragement regarding motherhood."
    },
    { role: 'user', content: message },
  ];

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // or gpt-4 if available
      messages: messages,
    });

    console.log('OpenAI response:', response); // Log the OpenAI response
    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).send('Error generating response');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
