import dotenv from 'dotenv';
dotenv.config();
// const API_KEY = "test-api-key";
//while hosting
const API_KEY = process.env.API_KEY;
console.log(process.env.API_KEY);
// console.log("Auth.js");

// Middleware for authentication
export const authenticate = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === API_KEY) {
        next();
    } else {
        res.status(401).json({ error: "Unauthorized: Invalid API Key" });
    }
};