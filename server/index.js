import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

// ✅ Proper CORS setup
app.use(
  cors({
    origin: "http://localhost:5173", // React/Vite frontend
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.get("/api/message", (req, res) => {
  res.json({ message: "data from server 🚀" });
});

const PORT = 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
