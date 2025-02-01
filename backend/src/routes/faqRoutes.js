const express = require("express");
const { createFAQ, getFAQs } = require("../controllers/faqController");
const router = express.Router();

// Existing Routes
router.post("/faqs", createFAQ);
router.get("/faqs", getFAQs);

// ✅ New Health Check Route
router.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

module.exports = router;
