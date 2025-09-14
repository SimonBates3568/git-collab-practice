require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(cors());

//logging middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Welcome message for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API!',
    version: '1.0.0',
    status: 'Server is running successfully'
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});