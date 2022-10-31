import express from "express";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import path from "path";
const __dirname = path.resolve();

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");

app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));
app.use("/public", express.static(__dirname + "/public"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
// app.listen(3000, handleListen);
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

server.listen(3000, handleListen);
