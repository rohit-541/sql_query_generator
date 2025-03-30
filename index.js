
// console.log("Index.js");
import express from 'express';

import { authenticate } from './Middleware/Auth.js';
import { convertToSQL } from './ConvertToSQL/convertToSQL.js';

export const app = express();
const PORT = 3000;

app.use(express.json());


// Query Endpoint
app.post('/query', authenticate, (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query is required" });
    const pseudoSQL = convertToSQL(query);
    res.json({ originalQuery: query, translatedQuery: pseudoSQL });
});

// Explain Endpoint
app.post('/explain', authenticate, (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query is required" });
    res.json({ explanation: `The query intends to retrieve data related to: ${query}` });
});

// Validate Endpoint
app.post('/validate', authenticate, (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query is required" });
    const SqlCommand = convertToSQL(query);
    const isValid = !(SqlCommand === "Invalid query: No valid command found");
    res.json({ valid: isValid, reason: isValid ? "Query structure is correct" : "Query format not recognized" });
});

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
