const FAQ = require("../models/faqModel");
const marked = require("marked"); // Converts Markdown to HTML

// ✅ Create FAQ with Markdown Support
exports.createFAQ = async (req, res) => {
    try {
        const { question, answer, languages, translations } = req.body;

        const newFAQ = new FAQ({
            question,
            answer, // Markdown content stored
            languages: languages || ["en"],
            translations: translations || {},
        });

        await newFAQ.save();
        res.status(201).json(newFAQ);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Fetch FAQs & Convert Markdown to HTML
exports.getFAQs = async (req, res) => {
    try {
        const { lang } = req.query;
        const faqs = await FAQ.find();

        const formattedFAQs = faqs.map((faq) => ({
            question: faq.getTranslation(lang || "en"),
            answer: marked.parse(faq.answer), // Converts Markdown to HTML
            translations: faq.translations,
        }));

        res.json(formattedFAQs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
