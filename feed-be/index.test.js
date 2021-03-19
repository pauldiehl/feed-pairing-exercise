const createServer = require("./server");
const supertest = require("supertest");
const { readData } = require('./helpers')
const app = createServer();

test("POST /posts", async () => {
    const data = { post: "something" }
    await supertest(app)
        .post("/api/posts")
        .send(data)
        .expect(200)
        .then(async (response) => {
            // Check the response
            expect(response.body.post).toBe(data.post);

            // Check the data in the database
            const posts = await readData();
            expect(posts[posts.length - 1]).toMatchObject(data)

        });
});
