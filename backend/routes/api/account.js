const { Router } = require("express");
const Account = require("../../model/account.js");

const router = Router();

router.get("/", async (req, res) => {
    try {
        const accounts = await Account.find();
        if (!accounts) throw new Error("No account found");
        res.status(200).json(accounts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    const newAccount = new Account(req.body);
    try {
        const account = await newAccount.save();
        if (!account) throw new Error("Something went wrong");
        res.status(201).json(account);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;