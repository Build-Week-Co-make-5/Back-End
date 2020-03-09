const request = require("supertest");
const server = require("../api/server.js");

const db = require("../data/db.config.js");

// Registering user tests

describe("auth-router testing", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("registering a user", () => {
    it("returns 201 OK", async () => {
      const user = {
        email: "aleman@gmail.com",
        password: "test",
        full_name: "Aleman test"
      };
      const res = await request(server)
        .post("/api/auth/register")
        .send(user);
      expect(res.status).toBe(201);
    });

    describe("logging in a user", () => {
      it("returns 200 OK", async () => {
        const user = {
            email: "aleman@gmail.com",
            password: "test",
            full_name: "Aleman test"
          };
          const userLog = {
            email: "aleman@gmail.com",
            password: "test",
          };
        await request(server).post('/api/auth/register').send(user)
        const res = await request(server).post('/api/auth/login').send(userLog)
        expect(res.status).toBe(200)
      });
    });
  });

});
