import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routers/userRouter.js"
import teacherRoutes from "./routers/teacherRoutes.js"
import studentRoutes from "./routers/studentRoutes.js"
 

dotenv.config();
connectDB();
// Initilizing express/creating app using express
const app = express();

app.use(express.json());


app.use("/api/user", userRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/student", studentRoutes);


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
// Set up the port number
app.listen(PORT, () =>
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port number: ${PORT}`
  )
);
