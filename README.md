Support Agent Chatbot

This is a Support Agent Chatbot designed to fetch information from Customer Data Platforms (CDPs) such as Segment, mParticle, Lytics, and Zeotap. The chatbot is built using React for the frontend, Node.js for the backend, and styled with Bootstrap.

🚀 Features

Fetches documentation from official CDP sources

Provides answers to 'how-to' questions

Built with React (Frontend) and Node.js (Backend)

Uses Bootstrap for styling

🛠️ Tech Stack

Frontend: React, Bootstrap

Backend: Node.js, Express

Data Sources: Official documentation of Segment, mParticle, Lytics, and Zeotap

📌 Installation and Setup

1️⃣ Clone the Repository

git clone https://github.com/avinashmandava/support-agent-chatbot.git
cd support-agent-chatbot

2️⃣ Install Dependencies

Frontend:

cd frontend
npm install

Backend:

cd backend
npm install

3️⃣ Run the Project

Start the Backend Server:

cd backend
npm start

Start the Frontend:

cd frontend
npm start

The React app should now be running on http://localhost:3000/.

📌 Project Structure

/support-agent-chatbot
│── frontend (React App)
│   ├── src
│   │   ├── components (UI Components)
│   │   ├── pages (Chatbot and other pages)
│   │   ├── App.js (Main React App)
│   │   ├── index.js (Entry point)
│   ├── public
│   ├── package.json
│   ├── ...
│
│── backend (Node.js Server)
│   ├── routes
│   │   ├── chatbot.js (Handles chatbot API calls)
│   ├── services (Fetch documentation)
│   ├── server.js (Express Server)
│   ├── package.json
│
│── README.md (Project Documentation)

📌 Usage

Open the chatbot in the browser.

Ask questions related to Segment, mParticle, Lytics, or Zeotap.

The bot will fetch relevant documentation and provide answers.

📌 Environment Variables

Create a .env file in the backend directory and add the required API keys:

API_KEY=your_api_key_here
PORT=5000

🛠️ Troubleshooting

Common Errors and Fixes

Error: "Permission denied (publickey)" while pushing to GitHub

Ensure your SSH key is added to GitHub (~/.ssh/id_ed25519.pub).

Error: "Module not found" when running React app

Run npm install inside the frontend folder.

Error: "Fetch Error" when asking questions in chatbot

Check if the backend server is running (npm start in backend).
