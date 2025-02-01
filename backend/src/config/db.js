const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const mongoURI =
            process.env.NODE_ENV === "test"
                ? "mongodb://localhost:27017/faq_test_db" // ✅ Local DB for Jest
                : process.env.MONGO_URI;

        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err);

        // ✅ Prevent Jest from forcefully exiting the process
        if (process.env.NODE_ENV !== "test") {
            process.exit(1);
        }
    }
};

module.exports = connectDB;
