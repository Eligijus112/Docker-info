// Loading required libraries
const express = require("express");
const redis = require("redis");

// Setting the port number
const port = 8000;

// Initiating the app API 
const app = express();

// Creating the conncetion to REDIS server
const client = redis.createClient({
  host: "redis-server",
  port: 6379
});

// Setting the initial values
client.set("Number_0", 0);
client.set("Number_1", 1);

// Getting the next Fibonachi sequence member
app.get("/", (req, res) => {

    client.mget(["Number_0", "Number_1"], (err, value) => {
        // Extracting previous two members
        var nth_2 = parseInt(value[0]);
        var nth_1 = parseInt(value[1]);

        // Getting the next member
        var nth = nth_2 + nth_1;

        // Displaying in text
        res.send("n-2: {" + value[0] + "} n-1: {" + value[1] + "} n: {" + nth + "}");
        
        // Saving to memory
        client.set("Number_0", nth_1);
        client.set("Number_1", nth);
    });
});

app.listen(port, () => {
  console.log("listening on port " + port);
});