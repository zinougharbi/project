const { Schema, model } = require("mongoose");

const AccountSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

Account = model("account", AccountSchema);

module.exports = Account;