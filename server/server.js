const express = require("express");

const cors = require('cors');
const bodyParser = require('body-parser');


require('./config/db'); //Initialize the database connection

const app = express();
const PORT = 3001 || process.env.PORT;


app.use(bodyParser.json());
app.use(cors());

const authRoutes = require('./routes/auth'); // Import authentication routes
app.use('/auth', authRoutes); // Use authentication routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
