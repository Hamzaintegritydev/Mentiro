const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require("dotenv");
const connectDatabase = require("./utils/db");
app.use(cors());
app.use(express.json());


// Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  })
dotenv.config({path:"./utils/config.env"});
connectDatabase();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
// MiddleWare for error
// // unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);
  server.close(()=>{
    process.exit(1);
  })
  })