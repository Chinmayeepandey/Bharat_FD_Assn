const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema(
    {
        question: { type: String, required: true },
        answer: { type: String, required: true }, // Supports HTML for WYSIWYG
        translations: { type: Object, default: {} },
        languages: { type: [String], default: ["en"] }, // Languages supported
    },
    { timestamps: true }
);

// ✅ Helper Method: Fetch Translation if Available
faqSchema.methods.getTranslation = function (lang) {
    return this.translations[lang] || this.question;
};

module.exports = mongoose.model("FAQ", faqSchema);
