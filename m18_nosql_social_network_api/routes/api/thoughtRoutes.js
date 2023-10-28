// THOUGHT ROUTES


const router = require('express').Router();
const { 
    getAllThoughts, 
    getOneThought, 
    addNewThought, 
    updateThought, 
    deleteThought, 
    addReaction, 
    deleteReaction 
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(addNewThought);

// /api/thoughts/:id
router.route('/:thoughtid').get(getOneThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;