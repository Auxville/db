const mongoose=require('mongoose');
const url="mongodb+srv://admin:rDW%40TSjxc%40DqcW8@chrone1.xzvef.mongodb.net/mydb?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true},function(err){
    if(err){
        console.log('Error in connection');
    }
    else{
        console.log('Connected!');
    }
});
module.exports=mongoose;