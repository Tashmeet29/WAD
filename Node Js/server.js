const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Start server
const http = require('http');
const port = process.env.PORT || 3000;
const host = 'localhost';

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
// const server = http.createServer(app);
// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });
