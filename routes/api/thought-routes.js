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
// /api/thoughts/<userId>/<thoughtId>/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction);
// /api/thoughts/<userId>/<thoughtId>/reactions/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;