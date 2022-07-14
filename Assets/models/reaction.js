const mongoose = require('mongoose');

const reactionSchemas=new mongoose.Schema({
    reactionId:{

    },
    reactionBody:{
        type:String,
        required:true,
    },
    username:{
        type:String,
            required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
    
});







module.exports=reactionSchemas