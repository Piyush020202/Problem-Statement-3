const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://Piyush:Test123@cluster0.8i3p6.mongodb.net/schooldb");
const studentSchema=mongoose.Schema({
    name:String,
    roll:Number,
    admyear:Number,
    marks:{
        type:Number,
        min:0,
        max:100,
    }
});

const Student=mongoose.model("Student",studentSchema);

app.route("/students")
.get(function(req,res){
    Student.find({},function(err,files){
        if(!err){
            res.send(files);
        }
    });
})
.post(function(req,res){
    const student1=new File({
        name:req.body.name,
        marks:req.body.marks,
        roll:req.body.roll,
        admyear:req.body.admyear
    });
    student1.save(function(err){
        if(!err){
            res.send("SuccessFull Task");
        }
    });
})
.delete(function(req,res){
    Student.deleteMany({},function(err){
        if(!err){
        console.log("Deleted SuccessFully");}
    })
});

app.route("/students/:studentname")
.get(function(req,res){
    
  Student.findOne({name:req.params.studentname},function(err,foundFile){
    if(foundFile){
     res.send(foundFile);
    }
    else{
        res.send("No such file Exsist");
    }
  });
})
.put(function(req,res){
    Student.updateOne(
        {name:req.params.studentname},
        {name:req.body.name,roll:req.body.roll,marks:req.body.marks,admyear:req.body.admyear},
        {overwrite:true},
        function(err)
        {
            if(!err){
                res.send("Good Job");
            }
        });
})
.patch(function(req,res){
    Student.updateMany({name:req.params.studentname},
        {$set: req.body},
        function(err){
            if(!err){
                res.send("success");
            }
        });

})
.delete(function(req,res){
    Student.deleteOne({name:req.params.studentname},function(err){
        if(!err){
            res.send("Deleted");
        }
    });
});

app.listen(process.env.PORT,function(){
    console.log("server started at port 3000");
});