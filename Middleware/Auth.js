const API_KEY = "test-api-key";

// Middleware for authentication
export const authenticate = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === API_KEY) {
        next();
    } else {
        res.status(401).json({ error: "Unauthorized: Invalid API Key" });
    }
};