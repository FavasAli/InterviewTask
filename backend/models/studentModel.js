import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);



const Student = mongoose.model("Student", userSchema);

export default Student;
