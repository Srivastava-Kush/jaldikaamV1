import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contactMail.route.js";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

//DB connect
// mongoose
//   .connect(process.env.DB_URL)
//   .then(() => {
//     console.log("MongoDb is connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

// index.js (backend)

app.use(cors({ origin: 'http://localhost:5173' }));


const PORT_NUM = process.env.PORT || 3000;

app.listen(PORT_NUM, () => {
  console.log(`Server is running on port ${PORT_NUM}!`);
});

app.use("/support", contactRoutes);

// app.use(express.static(path.join(__dirname, "/client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });
