const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/db.config.js");

describe("Get /api/issues", () => {
  beforeEach(async () => {
    await db("users").truncate();
    await db("issues").truncate();
  });

  async function registerToken() {
    await request(server)
      .post("/api/auth/register")
      .send({
        email: "aleman@gmail.com",
        password: "test",
        full_name: "Aleman test"
      });
    const res = await request(server)
      .post("/api/auth/login")
      .send({ email: "aleman@gmail.com", password: "test" });
    const token = res.body.token;
    return token;
  }

  it("should return 200 ok", async () => {
    const token = await registerToken();
    const response = await request(server)
      .get("/api/issues")
      .set("authorization", token);
    expect(response.status).toBe(200);
  });
});
