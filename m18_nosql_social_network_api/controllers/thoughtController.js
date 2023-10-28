// THOUGHT CONTROLLER


const { Thought, User, Reaction } = require('../models');

module.exports = {
    // Get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Get one thought by id
    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtid});
            if (!thought) {
                return res.status(404).json({message: 'No thought with this id!'});
            }
            res.json(thought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Create new thought
    async addNewThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id } },
                { runValidators: true, new: true }
            );
            res.json(thought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Update thought by id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtid },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!thought) {
                return res.status(404).json({message: 'No thought with this id!'});
            }
            res.json(thought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Delete thought by id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtid});
            if (!thought) {
                return res.status(404).json({message: 'No thought with this id!'});
            }
            res.json({message: 'Thought Deleted!'});
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Add reaction
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId});
            if (!thought) {
                return res.status(404).json({message: 'No thought with this id!'});
            }
            await Thought.findOneAndUpdate(
                { _id: thought },
                { $push: { reactions: req.body } },
                { runValidators: true, new: true }
            );
            res.json({message: 'Reaction Added!'});
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Delete reaction
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId});
            if (!thought) {
                return res.status(404).json({message: 'No thought with this id!'});
            }
            await Thought.findOneAndUpdate(
                { _id: thought },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );
            res.json({message: 'Reaction Removed!'});
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
};