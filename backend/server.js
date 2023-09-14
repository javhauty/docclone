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
  // Handle user sign up
});

app.post("/login", (req, res) => {
  // Handle user login
});

app.post("/document", (req, res) => {
  // Handle document creation
});

app.post("/share", (req, res) => {
  // Handle link sharing
});

const wss = new WebSocket.Server({ server: app });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    // Handle operational transforms
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
