const express = require('express');
const cors = require('cors');
const profileRoutes = require('./routes/profileRoutes');

const app = express();
const port = 5000;

// Middleware for CORS
app.use(cors());

// Middleware for parsing JSON requests (optional, depending on future expansion)
app.use(express.json());

// Register routes
app.use('/api', profileRoutes);

app.get('/', (req, res) => {
  res.send(`Server is running`);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
