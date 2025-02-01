const express = require("express");
const connectDB = require("./config/db");
const faqRoutes = require("./routes/faqRoutes");
require("dotenv").config();

const mongoose = require("mongoose");
const FAQ = require("./models/faqModel"); 

const app = express();
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Setup API Routes
app.use("/api", faqRoutes);

// ✅ AdminJS Setup (Use Dynamic Import for ES Modules)
(async () => {
    const { default: AdminJS } = await import("adminjs");
    const AdminJSExpress = await import("@adminjs/express");
    const AdminJSMongoose = await import("@adminjs/mongoose");

    AdminJS.registerAdapter(AdminJSMongoose);

    const adminJS = new AdminJS({
        databases: [mongoose],
        rootPath: "/admin",
        resources: [
            {
                resource: FAQ,
                options: {
                    properties: {
                        answer: { type: "richtext" },
                    },
                },
            },
        ],
    });

    const adminRouter = AdminJSExpress.buildRouter(adminJS);
    app.use(adminJS.options.rootPath, adminRouter);

    console.log("✅ Admin panel running at http://localhost:8000/admin");
})();

console.log("✅ Backend running");

// ✅ Export the app for testing
module.exports = app;
