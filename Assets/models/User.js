const { Schema, model } = require('mongoose');

const userSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    thought:[
        {
          type:Schema.Types.ObjectId,
          ref: 'thought'  
        }
    ],
    email:{
        type:String,
        required:true,
        unique:true,

    },
    friends:[
        {
            type:Schema.Types.ObjectId,
            ref:'User'
        }
    ]
})
const User =model('user', userSchema);

module.exports = User;
