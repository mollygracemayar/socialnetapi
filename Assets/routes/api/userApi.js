const router = require('express').Router();
const{
    getUsers,
    getSingleUser,
    createUsers,
    updateUsers,
    deleteUsers
}=require('../../controllers/userContrlr')

router.route('/').get(getUsers).post(createUsers);

router
.route('/:usersId')
.get(getSingleUser)
.put(updateUsers)
.delete(deleteUsers);

module.exports=router;