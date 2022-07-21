import asyncHandler from "express-async-handler";
import Student from "../models/studentModel.js";


const createStudent = asyncHandler(async (req, res) => {
    const { name,email ,phone} = req.body;

    const createdData = await Student.create({
      name,
      email,
      phone,
      
    });
  
    if (createdData) {
      res.status(201).json({
          _id:createdData._id,
          name:createdData.name,
          email:createdData.email,
          phone:createdData.phone,
  
      });
    }else
    {
      throw new Error("data not created")
    }
  });


  const fetchStudents=asyncHandler(async(req,res)=>{
    const datas=await Student.find({})
    if(datas){
        res.json(datas)
    }
})

const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id)

  if (student) {
    await student.remove()
    res.json({ message: "student removed" })
  } else {
    res.status(404)
    throw new Error("student not found")
  }
})
  
  export {createStudent,fetchStudents,deleteStudent}