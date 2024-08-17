import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import PropertyRoutes from "./Routes/properties"
const app = express();
const PORT = 5001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//api routes added;
app.use("/api/property",PropertyRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => {
    console.log("Database connected successfully");
    
    // Start server after database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });