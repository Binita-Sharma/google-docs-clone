# 📝 Google Docs Clone

A real-time collaborative document editor built with **React.js**, **Node.js**, **Socket.IO**, and **Quill.js**, designed to replicate the essential features of Google Docs. This project allows multiple users to edit the same document simultaneously in real-time with rich text formatting.

---

## 📌 Key Features

- 🔄 **Real-Time Collaboration** – Sync document content live across users using WebSockets.
- 🎨 **Rich Text Editor** – Integrated with Quill.js to provide formatting options like bold, italics, lists, links, headings, and more.
- 🔗 **Unique Document URLs** – Each document has its own shareable route.
- ⚡ **Auto Syncing** – Instant updates as users type, with no manual save required.
- 🧠 **Minimal UI** – Clean and intuitive interface to focus on writing.

---

## 🔧 Tech Stack

| Area        | Technology Used         |
|-------------|-------------------------|
| Frontend    | React.js, Quill.js      |
| Backend     | Node.js, Express.js     |
| Realtime    | Socket.IO               |
| Styling     | CSS                     |
| Package Manager | npm                |

---

## 📁 Folder Structure

googleDoc/
├── client/ # React Frontend with Quill integration
│ ├── public/
│ └── src/
│ ├── components/
│ ├── Editor.jsx
│ └── index.js
│
├── server/ # Backend using Node.js and Socket.IO
│ └── server.js
├── package.json
└── README.md
