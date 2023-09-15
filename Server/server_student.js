const express = require('express')
const app = express()
const bp = require('body-parser')
const db = require('mongoose')
const { log } = require('console')

const url = "mongodb+srv://ron:1234@cluster0.dcxmtyf.mongodb.net/Les12"
db.connect(url).then(()=>{
    console.log("DB IS ON");
})
.catch((err)=>{
    if (err) throw err;
});

app.use(express.static('pages'));
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.get("/signup",(req,res)=>{
    res.sendFile(__dirname + '/pages/signup.html')})

app.get("/signin",(req,res)=>{
    res.sendFile(__dirname + '/pages/signin.html')})

const studentSchema= db.Schema({
    id: String,
    name:String,
    age:Number
})

const studentList = db.model('students',studentSchema)

// let arr = [
//     {
//     id:'1234567',
//     name: 'eitan',
//     age: 18
// },
// {
//     id:'1234567',
//     name: 'rona',
//     age: 24
// },
// {
//     id:'1234567',
//     name: 'noa',
//     age: 22
// },
// ];
// studentList.insertMany(arr)


app.post('/signup' , (req,res)=>{

    let temp={
        id:req.body.id,
        name:req.body.name,
        age:req.body.age
    }
    const addDataToDb = async (user) =>{
await studentList.insertMany(user)
    }
    console.log(temp);
    addDataToDb(temp)

    res.redirect('/')

})

app.post('/signin', (req,res)=>{
    const checkIfStudentExsist = async() =>{
        let result = await studentList.findOne({id: req.body.id,name: req.body.name})
        if(result == null){
            res.send("Name does not exist")
        }else{
            res.send(`Welcome ${result.name}`)
        }
    }
    checkIfStudentExsist()
})

app.post('/',(req,res)=>{
    let temp = {
        name: req.body.name,
        age: req.body.age 
       }
       const findAndUpdate = async() =>{
        let result = await studentList.findOneAndUpdate(
            {name : temp.name},
            {$set : {age: temp.age}},
            {new:true}
            )
            if(result){
                res.send(`${result.name} has been changed to ${result.age}`)
                console.log(result);
                }else{
                    res.send("Name does not exist")
            }
       }
       findAndUpdate()
})



app.listen(3000,()=>{console.log('server running');
})

