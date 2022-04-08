const mongoose = require('mongoose');

const userSchema = {
    email: String,
    phoneNumber: String,
    sadLink: String,
    happyLink: String,
    contemptLink: String,
    fearLink: String,
    angerLink: String,
    diLink: String,
    suLink: String,
    createdAt: {
        type: Date,
        default : new Date()
    }
}

const User = mongoose.model("User", userSchema);

module.exports = User;