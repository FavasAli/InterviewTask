import express from "express";
import {createStudent,fetchStudents,deleteStudent} from '../controllers/studentController.js'
const router = express.Router();

router.post("/addstudent", createStudent);
router.get("/liststudent", fetchStudents);
router.delete("/deletestudent/:id", deleteStudent);

export default router;