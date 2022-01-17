const express  = require('express');
const mongoose = require('mongoose');
require('dotenv');
const Person  = require('./models/Person');
const app = express();
app.use(express.json());
const port = 3000

mongoose.connect("mongodb://localhost:27017/personDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//this routes are direct CRUD operation and should be used by admin Admin authentication middleware can be added if require 
app.get("/user",(req,res)=>{
    Person.find(function(err,person){
        if(err){
            console.log(err);
        }
        else{
            person.forEach(function(element){
                console.log(element.name);
            })
        }
    })
});

//this routes are direct CRUD operation and should be used by admin Admin authentication middleware can be added if require 
app.post("/User",function(req,res){

    const newPerson = new Person({
        name: req.body.name,
        quality: req.body.quality
    })
    newPerson.save();
    console.log("1 person added");
})

//this routes are direct CRUD operation and should be used by admin Admin authentication middleware can be added if require 
app.route("/User/:id")
    .get((req,res)=>{
        Person.findById(ObjectId(req.params.id),function(){
            if(err){
                console.log("error");
            }
            else{
                console.log(req.body.quality);
            }
        })
        
    })

    .put((req,res)=>{
        //edit details  of user 
        Person.findByIdAndUpdate({_id:req.params.id},
            {
            name:req.body.name,
            quality: req.body.quality
        },function(err,docs){
            if(err) res.json(err);
            else{
                res.send("successfully update");
            }
        })
        
    })

    .patch((req,res)=>{
        Person.updateOne({_id:req.params.id},
            {$set:req.body},
            function(err){
                if(!err){
                    res.send("Successfully updated");
                }
                else{
                    res.send(err);
                }
            }
            )
    })

    .delete((req,res)=>{
        //to delete a user
        Person.deleteOne({_id:req.body.params},function(err){
            if(err){
                res.json(err);
            }
            else{
                res.send("1 document deleted");
            }
        })
    
    })
//these are login and signUp routes 
app.use('/signIn', require('./Routes/login'));
app.use('/signUp',require('./Routes/signup'));

app.listen(3000 || port,function(){
    console.log(`server is running on port ${port}`);
})








