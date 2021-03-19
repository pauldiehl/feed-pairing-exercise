const express = require("express");
const router = express.Router();
const { readData, writeData } = require('./helpers')

router.post("/posts", async ({ body }, res) => {
    const posts = await readData()
    posts.push(body);
    await writeData(posts);
    res.send(body)
});

module.exports = router;
