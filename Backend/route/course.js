const express= require('express')
const router = express.Router();
const COURSES= require("../Models/Course");
// ROUTE 1: Get all the information in CBC: GET "/api/CBC/fetchalldata". login required
const Courses= [
    { "name": "Responsive Web Design Certification", "duration": 300 },
    { "name": "Legacy Responsive Web Design Certification", "duration": 300},
    { "name": "FrontEnd Development Libraries Certification", "duration": 300 },
    { "name": "Data Visualization Certification", "duration": 300 },
    { "name": "BackEnd Development and APIs Certification", "duration": 300 },
    { "name": "Quality Assurance Certification", "duration": 300 },
    { "name": "Scientific Computing with Python Certification", "duration": 300 },
    { "name": "Data Analysis with Python Certification", "duration": 300 },
    { "name": "Information Security Certification", "duration": 300 },
    { "name": "Machine Learning with Python Certification", "duration": 300 },
    { "name": "College Algebra with Python Certification", "duration": 300 }  
  ];
  async function seedMockData() {
    try {
      // Remove existing data
      await COURSES.deleteMany();
  
      // Insert mock data
      await COURSES.create({ courses: Courses });
  
      console.log('Mock data seeded successfully');
    } catch (error) {
      console.error('Error seeding mock data:', error);
    }
}
seedMockData();
router.get('/fetchdata',async(req, res)=>{
    try {
        const Courses = await COURSES.find();
        res.send({ courses: Courses[0].courses});
        
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error");
    }
})

module.exports=router;