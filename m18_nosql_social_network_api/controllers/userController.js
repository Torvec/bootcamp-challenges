// USER CONTROLLER


const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getAllUsers(req, res) {
        try {
            const allUsers = await User.find();
            res.json(allUsers);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    // Get one user by id
    async getOneUser(req, res) {
        try {
            const oneUser = await User.findOne({_id: req.params.userId});
            if(!oneUser) {
                return res.status(404).json({message: 'No user with this id!'});
            }
            res.json(oneUser);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    // Create new user
    async addNewUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    // Update user by id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if(!user) {
                return res.status(404).json({message: 'No user with this id!'});
            }
            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    // Delete user by id along with associated thoughts
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId});
            if(!user) {
                return res.status(404).json({message: 'No user with this id!'});
            }
            const userThought = await Thought.deleteMany({ username: user.username });
            if(!userThought) {
                return res.status(404).json({message: 'User deleted but no thoughts found!'});
            }
            res.json({message: 'User and associated thoughts deleted!'});
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    // Add friend to user friends list
    async addFriend(req, res) {
        try {
            const { userId, friendId } = req.params;
            if (userId === friendId) {
                return res.status(400).json({message: 'Cannot add yourself as a friend!'});
            }
            const [user, friend] = await Promise.all([
                User.findOne({ _id: userId }),
                User.findOne({ _id: friendId })
            ]);
            if (!user || !friend) {
                return res.status(404).json({message: 'No user or friend with this id!'});
            }
            await Promise.all([
                User.findOneAndUpdate(
                    { _id: userId },
                    { $addToSet: { friends: friendId } },
                    { runValidators: true, new: true }
                ),
                User.findOneAndUpdate(
                    { _id: friendId },
                    { $addToSet: { friends: userId } },
                    { runValidators: true, new: true }
                )
            ]);
            res.json({message: 'Friend Added!'});
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    // Delete friend from user friends list
    async removeFriend(req, res) {
        try {
            const { userId, friendId } = req.params;
            const [user, friend] = await Promise.all([
                User.findOne({ _id: userId }),
                User.findOne({ _id: friendId })
            ]);
            if (!user || !friend) {
                return res.status(404).json({message: 'No user or friend with this id!'});
            }
            await Promise.all([
                User.findOneAndUpdate(
                    { _id: userId },
                    { $pull: { friends: friendId } },
                    { runValidators: true, new: true }
                ),
                User.findOneAndUpdate(
                    { _id: friendId },
                    { $pull: { friends: userId } },
                    { runValidators: true, new: true }
                )
            ]);
            res.json({message: 'Friend Removed!'});
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
};