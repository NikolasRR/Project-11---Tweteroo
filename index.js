import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let users = [];
let tweets = [];
app.post("/sign-up", (req, res) => {
    users.push(req.body);
    res.send("OK");
});

app.post("/tweets", (req, res) => {
    const userThatTweeted = users.find(user => user.username === req.body.username);
    tweets.unshift(
        {
            username: req.body.username,
            avatar: userThatTweeted.avatar, 
            tweet: req.body.tweet
        }
    );
    res.send("OK");
});

app.get("/tweets", (req, res) => {
    let lastTenTweets = [];
    lastTenTweets = tweets.filter((tweet, index) => index < 10);
    res.send(lastTenTweets);
});

app.listen(5000, () => console.log("server online"));