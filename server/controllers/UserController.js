const UserModel = require('../models/User')

module.exports.getUsers = async (req, res) => {
    const users = await UserModel.find({})
    res.send(users)
}

module.exports.createUser = async (req, res) => {
    const { newUser } = req.body;
    try {
        await UserModel.create(newUser);
        res.status(201).send({ message: 'User created' });
    }
    catch (err) {
        console.log("something went wrong")
        res.status(500).send({ message: 'Something went wrong' });
    }
}