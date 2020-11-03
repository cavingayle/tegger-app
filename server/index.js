require("dotenv").config();
const express = require("express");
const app = express();

//Controller file to hold http request
const youtube = require("./youtubeApiController");

//Server Port held in eviromental variables
const { SERVER_PORT } = process.env || 4003;


//Middlewear  
app.use(express.json());


//Endpoint
app.post("/api/youtube", youtube.search);


app.listen(SERVER_PORT, () =>
  console.log(`Server is now running on port ${SERVER_PORT}`)
);