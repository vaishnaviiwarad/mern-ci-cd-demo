
const request = require("supertest");
const app = require("./app");

describe("GET /hello", () => {
  test("should return 200 and message", async () => {
    const res = await request(app).get("/hello");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Hello World");
  });
});
