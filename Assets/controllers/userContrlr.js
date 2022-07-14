const{User, thought}=require('../models')

module.exports={
  getUsers(req,res){
    User.find()
    .then((users)=>res.json(users))
    .catch((err)=>res.status(500).json(err));
  },
  getSingleUser(req,res){
    users.findone({_id: req.params.usersId})
    .select('-__v')
    .then((users)=>
    !users
    ? res.status(404).json({message:'no users with that id'})
    :res.json(users)
    )
    .catch((err)=> res.status(500).json(err));
  },
  createUsers(req,res){
    users.create(req.body)
    .then((users)=>res.json(users))
    .catch((err)=>{
      console.log(err);
      return res.status(500).json(err);
    });
  },
  deleteUsers(req,res){
    users.findOneAndDelete({_id:req.params.usersId})
    .then((users)=>
    !users
    ? res.status(404).json({message:'no users with that id'})
    : thoughts.deleteMany({_id:{$in:users.thoughts}})
    )
    .then(()=>res.json({message:'users deleted'}))
    .catch((err)=>res.status(500).json(err));
  },
  updateUsers(req,res){
    users.findOneAndUpdate(
      { _id: req.params.courseId },
      { $set: req.body },
      { runValidators: true, new: true } 
    )
    .then((users)=>
    !users
    ? res.status(404).json({ message: 'No Users with this id!' })
    : res.json(users)
    )
    .catch((err)=>res.status(500).json(err));
  },
createFriends(req,res){
  users.findOneAndUpdate(
    { _id: req.params.friendId },
    { $set: req.body },
    { runValidators: true, new: true } 
  )
  .then((users)=>
  !users
  ? res.status(404).json({ message: 'No Users with this id!' })
  : res.json(users)
  )
  .catch((err)=>res.status(500).json(err));
},
deleteFriends(req,res){
  users.findOneAndUpdate(
    { _id: req.params.friendId },
    { $set: req.body },
    { runValidators: true, new: true } 
  )
  .then((users)=>
  !users
  ? res.status(404).json({ message: 'No Users with this id!' })
  : res.json(users)
  )
  .catch((err)=>res.status(500).json(err)); 
}

};
