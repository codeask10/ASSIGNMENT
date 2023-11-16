const mongoose= require('mongoose');
const {Schema}= mongoose

const CoursesSchema= new Schema({
    courses: [
        {
          name: { type: String, required: true },
          duration: { type: Number, required: true }
        }
      ]

});
module.exports=mongoose.model("courses", CoursesSchema);