// src/index.ts

import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint untuk register user
app.post("/register", (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Logika untuk register user
  res.send("User registered");
});

// Endpoint untuk login user
app.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Logika untuk login user
  res.send("User logged in");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
