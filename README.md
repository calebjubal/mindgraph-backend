
# 🛠️ MindGraph Lite Version — Backend

The backend for [mindgraph-frontend](https://www.github.com/calebjubal/mindgraph-frontend)
Minimal backend to support MindGraph Lite: upload, process, and share mindmaps.

---

## 📦 Tech Stack

- **Backend Framework**: Node.js + Express.js
- **Language**: TypeScript
- **Database**: MongoDB (future)
- **Authentication**: (future using Clerk/Auth0)

---

## 📂 Folder Structure

backend/
├── src/
│   ├── controllers/
│   │   └── uploadController.ts  # Handles file upload
│   ├── routes/
│   │   └── uploadRoutes.ts      # Defines upload route
│   ├── app.ts                   # Main express app
│   ├── server.ts                # Server entry point
│   └── config/
│       └── db.ts                 # (future) Database connection
├── package.json
├── tsconfig.json
└── README.md

---

## 🚀 How to Run Locally

### 1. Clone this repository

git clone https://github.com/your-username/mindgraph-lite-backend.git
cd mindgraph-lite-backend

### 2. Install dependencies

npm install

### 3. Start the server

npm run dev

Server runs on http://localhost:5000

---

## 🌟 API Endpoints

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| POST   | `/api/upload`   | Upload files         |
| GET    | `/api/explore`  | List all public maps (future) |

---

## 🔥 Future Enhancements

- JWT-based Authentication
- File Parsing (PDF, TXT)
- AI Summarization
- Real-time collaboration

---

## 📜 License

This project is licensed under MIT.
"""