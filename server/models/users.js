const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true, lowercase: true, trim: true},
    password:{type: String, required: true},
});

const UserModel = mongoose.model("users", UsersSchema);
module.exports = UserModel;