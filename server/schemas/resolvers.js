const { User, Movies } = require('../models')

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        updateUser: async(parent, args) => {
            const user = await User.findOneAndUpdate(
                {_id}
            )
            return user
        },
        deleteUser: async(parent, args) => {
            const user = await User.deleteOne(
                {_id}
            )
            return user
        }
    }
}

module.exports = resolvers