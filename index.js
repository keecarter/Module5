import express from "express";
import myTestRoutes from "./routes/myTestRoutes.js"; 
import calculatorRoutes from "./routes/calculatorRoutes.js";

const app = express();
const port = 3001;

app.use("/", express.static("public"));

app.use("/myTest", myTestRoutes);
app.use("/calculator", calculatorRoutes);
  
app.listen(port, () => {
    console.log(`myapp listening at http://localhost:${port}`);
  });