const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const WebSocket = require("ws");

const app = express();

mongoose.connect("mongodb://localhost/docclone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(passport.initialize());

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  // Create a new user in the database with the provided username and password
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Check if the provided username and password match a user in the database
});

app.post("/document", (req, res) => {
  const { content } = req.body;
  // Create a new document in the database with the provided content
});

app.post("/share", (req, res) => {
  const { documentId } = req.body;
  // Create a new link in the database that points to the specified document
});

const wss = new WebSocket.Server({ server: app });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    // Apply the received operational transform to the specified document
    // Broadcast the updated document to all connected clients
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
