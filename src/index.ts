// src/index.ts

import express, { Request, Response } from "express";

const app = express();
const base_url = "localhost";
const port = 3000;

app.use(express.json());

interface User {
  username: string;
  password: string;
}

interface Product {
  productId: number;
  name: string;
  price: number;
}

interface Order {
  productId: number;
  quantity: number;
}

const users: User[] = [];
const products: Product[] = [];
const orders: Order[] = [];

// Endpoint base_url
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Sanbercode REST API Server",
    data: "Created by: Muhammad Ridwan Hakim",
  });
});

// Endpoint untuk register user
app.post("/register", (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (typeof username !== "string" || typeof password !== "string") {
    return res.status(400).send("Invalid user data");
  }

  const newUser: User = { username, password };
  users.push(newUser);
  res.status(201).send(newUser);
});

// Endpoint untuk login user
app.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Logika untuk login user
  res.send("User logged in");
});

// Endpoint untuk menambah produk
app.post("/products", (req: Request, res: Response) => {
  const { name, price } = req.body;

  if (typeof name !== "string" || typeof price !== "number") {
    return res.status(400).send("Invalid product data");
  }

  const newProduct: Product = {
    productId: products.length + 1,
    name,
    price,
  };
  products.push(newProduct);
  res.status(201).send(newProduct);
});

// Endpoint untuk mendapatkan semua produk
app.get("/products", (req: Request, res: Response) => {
  res.send(products);
});

// Endpoint untuk mendapatkan semua user yang terdaftar
app.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

// Endpoint untuk membuat order
app.post("/orders", (req: Request, res: Response) => {
  const { productId, quantity } = req.body;

  if (typeof productId !== "number" || typeof quantity !== "number") {
    return res.status(400).send("Invalid order data");
  }

  const productExists = products.find(
    (product) => product.productId === productId
  );
  if (!productExists) {
    return res.status(404).send("Product not found");
  }

  const newOrder: Order = { productId, quantity };
  orders.push(newOrder);
  res.status(201).send(newOrder);
});

// Endpoint untuk mendapatkan semua order
app.get("/orders", (req: Request, res: Response) => {
  res.send(orders);
});

app.listen(port, () => {
  console.log(`Server is running at http://${base_url}:${port}`);
});
