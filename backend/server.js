require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5007;

// Sample API to handle user queries
app.post('/query', async (req, res) => {
    console.log("Received question:", req.body.question);
    try {
        const answer = await fetchSegmentDocs(req.body.question);
        res.json({ answer });
    } catch (error) {
        console.error("Error fetching documentation:", error);
        res.status(500).json({ answer: "Error fetching documentation." });
    }
});


// Function to fetch documentation (to be implemented)
async function fetchDocumentation(question) {
    // Logic to search relevant docs from Segment, mParticle, Lytics, Zeotap
    return "Fetching relevant documentation..."; 
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

