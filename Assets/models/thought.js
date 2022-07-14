const mongoose = require('mongoose');
const reactionSchema=require('./reaction')

const thoughtSchema=new mongoose.Schema({
    thoughtText:{
        type:String,
        required:true,
        maxlength: 280,
        minlength: 1,
    },
    createdAt:{
    Date
    },
    username:{
        type: String,
        required:true,
    },
    
    reaction:[reactionSchema]
})

const thoughts =mongoose.model('thoughts', thoughtSchema);

module.exports = thoughts;
