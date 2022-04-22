import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let users = [];
let tweets = [];
let postedTweets = [];

app.post("/sign-up", (req, res) => {
    users.push(req.body);
    res.send("OK");
});

app.post("/tweets", (req, res) => {
    tweets.push(req.body);
    res.send("OK");
    console.log(req.body);
});



app.listen(5000, () => console.log("server online"));