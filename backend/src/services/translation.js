const { Translate } = require('@google-cloud/translate').v2;
require('dotenv').config();

const translate = new Translate({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});

async function translateText(text, targetLang) {
    try {
        const [translation] = await translate.translate(text, targetLang);
        return translation;
    } catch (error) {
        console.error('Translation Error:', error);
        return text; // Fallback to original text
    }
}

module.exports = translateText;
