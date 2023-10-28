// USER ROUTES


const router = require('express').Router();
const { 
    getAllUsers, 
    getOneUser, 
    addNewUser, 
    updateUser, 
    deleteUser,
    addFriend,
    removeFriend 
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(addNewUser);

// /api/users/:id
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;