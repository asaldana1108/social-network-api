const router = require('express').Router();
const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction, 
    removeReaction
} = require('../../controllers/thought-controller');


// /api/thoughts/<userId>
router
    .route('/:userId')
    .get(getAllThoughts)
    .post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)
    .put(addReaction);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;