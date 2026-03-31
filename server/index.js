import express from "express;
import cors from "cors";
import dotenv from "dotenv";
import transactionsRoute from ".routes/transactions.js";
 dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/transactions",transactionsRoute);
app.listen(5000,()=>{
  console.log(server running on port 5000");
});



