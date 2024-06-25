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

// Endpoint untuk menambah produk
app.post('/products', (req: Request, res: Response) => {
    const { name, price } = req.body;
    // Logika untuk menambah produk
    res.send('Product added');
});

// Endpoint untuk mendapatkan semua produk
app.get('/products', (req: Request, res: Response) => {
    // Logika untuk mendapatkan semua produk
    res.send('List of products');
});

// Endpoint untuk membuat order
app.post('/orders', (req: Request, res: Response) => {
    const { productId, quantity } = req.body;
    // Logika untuk membuat order
    res.send('Order created');
});

// Endpoint untuk mendapatkan semua order
app.get('/orders', (req: Request, res: Response) => {
    // Logika untuk mendapatkan semua order
    res.send('List of orders');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
