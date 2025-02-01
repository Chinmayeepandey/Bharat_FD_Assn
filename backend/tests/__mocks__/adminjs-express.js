module.exports = {
    buildRouter: jest.fn(() => {
        return {
            use: jest.fn(), // Mock middleware attachment
        };
    }),
};
