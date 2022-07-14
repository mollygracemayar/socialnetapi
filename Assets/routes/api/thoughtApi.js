const router = require('express').Router();
const{
getThoughts,
getSingleThought,
createThoughts,
deleteThoughts,
addReaction,
removeReaction,
}=require('../../controllers/thoughtContrlr')

router.route('/').get(getThoughts).post(createThoughts);

router.route('/:thoughtsId').get(getSingleThought).delete(deleteThoughts);

router.route('/:thoughtsId/reactions').post(addReaction);

router.route('/:thoughtsId/reactions/:reactionsId').delete(removeReaction);

module.exports=router;