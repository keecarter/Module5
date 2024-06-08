// app.js - new file at top level
import express from 'express';
const app = express()
const port = 3000
// map all routes to the express app
const calculatorRoutes =
require('./routes/calculatorRoutes');
app.use('/calculator', calculatorRoutes);
// export the app
export default app;