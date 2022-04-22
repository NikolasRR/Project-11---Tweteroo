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
    console.log(req.body);
});

app.post("/tweets", (req, res) => {
    const userThatTweeted = users.find(user => user.username === req.body.username);
    tweets.push(
        {
            username: req.body.username,
            avatar: userThatTweeted.avatar, 
            tweet: req.body.tweet
        }
    );
    res.send("OK");
    console.log(req.body);
});

app.get("/tweets", (req, res) => {
    const lastTenTweets = tweets.filter((tweet, index) => index > tweets.length - 11)
    res.send(lastTenTweets);
    console.log("foi");
});

app.listen(5000, () => console.log("server online"));