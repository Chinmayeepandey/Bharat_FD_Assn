module.exports = {
    testEnvironment: "node",
    testMatch: ["<rootDir>/tests/**/*.test.js"],
    moduleNameMapper: {
        "adminjs": "<rootDir>/tests/__mocks__/adminjs.js",
        "@adminjs/express": "<rootDir>/tests/__mocks__/adminjs-express.js",
        "@adminjs/mongoose": "<rootDir>/tests/__mocks__/adminjs-mongoose.js"
    }
};
