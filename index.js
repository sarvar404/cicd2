import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import axios from "axios";
import fs from "fs";

dotenv.config();
const app = express();
// app.use(morgan("dev"));
const PORT = process.env.PORT || 8002;

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
const corsOptions = {
  origin: true,
  methods: ["*"], // Allow all methods
  credentials: true,
};

app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(cors(corsOptions));
app.use(express.static("public"));

app.get("/", async (request, response) => {
  response.send("Updated2 Cookies cleared and APIs working");
});

app.listen(PORT, () => {
  console.log(`connection is on :: >> ${PORT}`);
});