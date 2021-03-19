const createServer = require("./server");

const app = createServer();
app.listen(8080, () => {
    console.log("Server has started!");
});
