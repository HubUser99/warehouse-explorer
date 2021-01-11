import express from "express";

const app = express();
const port = process.env.PORT ?? 3001;

app.get("/", (req, res) => {
    res.send("Hi!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});