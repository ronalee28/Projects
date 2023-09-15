const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("mongoose");

const URL = "mongodb+srv://ron:1234@cluster0.dcxmtyf.mongodb.net/omg";

db.connect(URL)
  .then(() => {
    console.log("DB IS ON!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static("pages"));


const studentSchema = db.Schema({
  name: String,
  age: Number,
});
const studentModel = db.model("students", studentSchema);

app.post("/addStudent", async (req, res) => {
  // {studentName, studentAge} = req.body
  const studentName = req.body.studentName;
  const studentAge = req.body.studentAge;
  await studentModel.insertMany({ name: studentName, age: studentAge });
  res.json({ msg: "ok" });
  
});

app.get("/getStudents", async (req, res) => {
  let result = await studentModel.find({});
  console.log(result);
  res.json({ result });
});

app.get("/getStudentsOver20", async (req, res) => {
  let result = await studentModel.find({ age: { $gt: 20 } });
  res.json({ result });
});

app.put("/updateName", async (req, res) => {
  const oldName = req.body.oldName;
  const newName = req.body.newName;
  const result = await studentModel.findOneAndUpdate(
    { name: oldName },
    { $set: { name: newName } },
    { new: true }
  );

  if(result){
    res.json(`${result.name} is now updated`)
  }else{
    res.json('no such name')
  }

});

app.delete('/deleteName',async(req,res)=>{
    const deleteName = req.body.deleteName;
    const result = await studentModel.findOneAndDelete({name: deleteName})
    if(result){
        res.json(`${result.name} was deleted`)
    }else{
        res.json('no such name')
    }
})

app.listen(3000, () => {
  console.log("server is on");
});

