const router = require('express').Router();

const { getAllUsers, createUser, getUserById, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/user-controller');

// Get all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Get one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
    .put(addFriend);

router.route('/:userId/:thoughtId/:friendId').delete(removeFriend);

module.exports = router; 