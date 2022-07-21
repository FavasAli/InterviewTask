import express from "express";
import {createData,fetchTeachers,deleteTeacher} from '../controllers/teacherController.js'
const router = express.Router();

router.post("/addteacher", createData);
router.get("/listteacher", fetchTeachers);
router.delete("/deleteteacher/:id", deleteTeacher);


export default router;