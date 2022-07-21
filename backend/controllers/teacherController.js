import asyncHandler from "express-async-handler";
import Teacher from "../models/teacherModel.js";


const createData = asyncHandler(async (req, res) => {
    const { name,email ,phone} = req.body;

    const createdData = await Teacher.create({
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

  const fetchTeachers=asyncHandler(async(req,res)=>{
    const datas=await Teacher.find({})
    if(datas){
        res.json(datas)
    }
})


const deleteTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id)

  if (teacher) {
    await teacher.remove()
    res.json({ message: "teacher removed" })
  } else {
    res.status(404)
    throw new Error("teacher not found")
  }
})
  
  export {createData,fetchTeachers,deleteTeacher}