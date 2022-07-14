const { ObjectId } = require('mongoose').Types;
const{User, thoughts}=require('../models')

module.exports={

    getThoughts(req,res){
    thoughts.find()
    .then((thoughts)=>res.json(thoughts))
      .catch((err) => res.status(500).json(err));
      
    },
    getSingleThought(req, res){
        thoughts.findOne({_id:req.params.thoughts})
        .select('-__v')
        .then((thoughts)=>
        !thoughts
        ? res.status(404).json({message:'no thoughts with that id'})
        :res.json(thoughts)
        )
        .catch((err) => res.status(500).json(err));

  },
  createThoughts(req,res){
    thoughts.create(req.bady)
    .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  deleteThoughts(req,res){
    thoughts.findOneAndRemove({ _id: req.params.thoughtsId }
        .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No such student exists' })
          : User.findOneAndUpdate(
              { students: req.params.thoughtsId },
              { $pull: { thoughts: req.params.thoughtsId } },
              { new: true }
            )
      )
    )
      .then((User) =>
        !User
          ? res.status(404).json({
              message: 'thoughts deleted, but no user found',
            })
          : res.json({ message: 'thoughts successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      })
    },
addReaction(req,res){
    thoughts.findOneAndUpdate(
        {_id:req.params.thoughtsId},
        {$pull:{reactions:{reactionsId: req.params.reactionsId}}},
        {runValidators:true,new:true}
    )
    .then((thoughts)=>
    !thoughts
    ?res
    .status(404)
    .json({message: 'no thoughts found with that id'})
    :res.json(thoughts)
    )
    .catch((err) => res.status(500).json(err));
},
removeReaction(req,res){
    thoughts.findOneAndUpdate(
        {_id:req.params.thoughtsId},
        {$pull:{reactions:{reactionsId: req.params.reactionsId}}},
        {runValidators:true,new:true}
    )
    .then((thoughts)=>
    !thoughts
    ?res
    .status(404)
    .json({message: 'no thoughts found with that id'})
    :res.json(thoughts)
    )
    .catch((err) => res.status(500).json(err));  
}
}