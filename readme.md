This Project Api is can be used to Manage a School Database 
It can Accept
Student's Name as Name
Roll No as roll
Admission Year as admyear
marks as marks

To Get all articles You can Head Over to (https://enigmatic-headland-29169.herokuapp.com/students).You Can Perform Delete or Post To delete all students list or to Post a new Student Details.

To Get a Specific Student List You Have To Call it using (https://enigmatic-headland-29169.herokuapp.com/students/studentname) to access details of a specific student.
You can Perform Put Patch and Delete query on mongo db to update or delete the specific article.

The Schema is as Follows
studentSchema=mongoose.Schema({
    name:String,
    roll:Number,
    admyear:Number,
    marks:{
        type:Number,
        min:0,
        max:100,
    }

    Hope You will benifit From This Api See You Soon!