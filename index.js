import express from "express";
import cors from "cors";
import fetch from "node-fetch"

const app = express();
const port = 3000;
// Using cors to validate the request sent from localhost can be used to handle requests while in production.
app.use(cors());

app.get("/proxy", async(req, res) =>{
    try {
        // Using proxy server to fetch the API response .
        const response = await fetch('https://api.jsonserve.com/Uw5CrX');
        const data = await response.json();
        // Sending a json data back to the frontend.
        res.json(data);
    } catch (error) {
        // Handling the error if failed to get a response back from the API.
        res.status(500).json({ error: 'Failed to fetch data' });
    }

})

// Run the server at port 3000.
app.listen(port, ()=>{{
    console.log("The server is listening");
}})