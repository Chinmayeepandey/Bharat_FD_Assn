const app = require("./app");

const PORT = process.env.PORT || 8000;
app.listen(PORT, "0.0.0.0", () => console.log(`✅ Server running on http://0.0.0.0:${PORT}`));



