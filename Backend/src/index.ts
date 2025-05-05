import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Node.js!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
