const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../src/app");

describe("FAQ API Tests", () => {
    beforeAll(async () => {
        await mongoose.connect("mongodb://localhost:27017/faq_test_db", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        // ✅ Close MongoDB properly after tests
        await mongoose.connection.close();
    });

    test("GET /api/faqs should return an array", async () => {
        const response = await request(app).get("/api/faqs");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test("POST /api/faqs should create a FAQ", async () => {
        const newFAQ = {
            question: "How do I use this API?",
            answer: "Use the provided endpoints.",
        };

        const response = await request(app)
            .post("/api/faqs")
            .send(newFAQ)
            .set("Content-Type", "application/json");

        expect(response.status).toBe(201);
        expect(response.body.question).toBe(newFAQ.question);
        expect(response.body.answer).toBe(newFAQ.answer);
    });
});
