const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const currencyRoutes = require('./src/routes/ConverterRoutes');
const authRoutes = require("./src/routes/authRoutes")
const morgan = require('morgan');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

// Use the currency routes
app.use('/api/currency', currencyRoutes);
app.use("/api/users" , authRoutes );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
