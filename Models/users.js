const db=require('../dbconnection');

const usersSchema=db.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true}

});

module.exports=db.model('Users',usersSchema);