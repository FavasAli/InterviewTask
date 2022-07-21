
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";


// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { name, password } = req.body

    const chekchUser=(name)=>{
        if(name==="admin"){
            return true
        }
    }

    const user = chekchUser(name)



    if (user && (password==='admin')) {
        res.json({
            _id: user._id,
            name: user.name,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

export{authUser}