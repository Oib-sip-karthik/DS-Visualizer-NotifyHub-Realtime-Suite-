# DS-Visualizer-NotifyHub-Realtime-Suite-
DS-Visualizer API  A REST API that generates step-by-step algorithm visualizations (sorting, searching, graph algorithms).  2️⃣ NotifyHub – Real-time Engine  A WebSocket server built using Socket.io for sending live algorithm steps, chat messages, and broadcast events to connected clients.  Together, they create a complete system for learning, 
🧠 DS-Visualizer + 🔔 NotifyHub (Realtime Suite)

A powerful combined backend designed for DSA learning platforms.
This suite includes:

1️⃣ DS-Visualizer API

A REST API that generates step-by-step algorithm visualizations (sorting, searching, graph algorithms).

2️⃣ NotifyHub – Real-time Engine

A WebSocket server built using Socket.io for sending live algorithm steps, chat messages, and broadcast events to connected clients.

Together, they create a complete system for learning, visualizing, and collaborating on algorithms in real-time.

🚀 Features
🧮 DS-Visualizer API

Bubble Sort visualization (more algorithms can be added)

Returns:

Original array

Sorted array

Detailed step list (compare, swap, etc.)

Clean REST routes (/api/sort/bubble)

Plug-and-play for any frontend visualizer

🔔 NotifyHub – Real-Time Notifications & Chat

Socket.io powered

Join algorithm-specific rooms (e.g., bubble-sort)

Broadcast:

Algorithm visualization steps

System notifications

Chat messages

Perfect for a live classroom / tutorial experience

🧱 Tech Stack

Node.js

Express.js

Socket.io

CORS

dotenv

📁 Project Structure
ds-visualizer-realtime-suite/
│
├── ds-api/
│   ├── server.js
│   ├── package.json
│   └── routes/
│       └── sortRoutes.js
│
└── notifyhub/
    ├── server.js
    └── package.json

⚙️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/ds-visualizer-realtime-suite.git
cd ds-visualizer-realtime-suite

2️⃣ Setup DS-Visualizer API
cd ds-api
npm install
npm start


Starts at

http://localhost:5001

Example API:

POST /api/sort/bubble
Body:

{
  "array": [5, 1, 4, 2]
}


Response contains:

Original array

Sorted array

Steps list (detailed)

3️⃣ Setup NotifyHub – Real-Time Server
cd ../notifyhub
npm install
npm start


Starts at:

http://localhost:5002

🔌 WebSocket Events
Join a room
socket.emit("join-room", "bubble-sort");

Send chat message
socket.emit("chat-message", {
  room: "bubble-sort",
  message: "Hello everyone!"
});

Send real-time algorithm step
socket.emit("algo-step", {
  room: "bubble-sort",
  step
});

Receive algorithm steps
socket.on("algo-step", (step) => {
  console.log("Live step:", step);
});

📊 Example Use Case

1️⃣ Client sends an array to DS-Visualizer API
2️⃣ Receives step-by-step sorting operations
3️⃣ Sends the steps live to a WebSocket room
4️⃣ All connected users see the algorithm being executed in real-time

This is ideal for:

Learning platforms

Online DSA workshops

Screenless teaching

Multi-user algorithm visualization

🌱 Future Enhancements

Add Merge Sort, Quick Sort, Insertion Sort

Add BFS, DFS, Dijkstra, A* Pathfinding

Build a React front-end

Store run history in a database

Add user authentication

🤝 Contributing

Contributions are welcome!
Feel free to:

Add more algorithms

Improve step formatting

Add backend optimizations

Create a frontend visualizer

👨‍💻 Author

Abhinava Karthik CY
Full Stack & DSA Enthusiast
GitHub: <https://github.com/Oib-sip-karthik>

