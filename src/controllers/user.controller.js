const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const {upload } = require("../utils");


router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});


router.post("/",upload.array("avatar"),
async (req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const currentCount = await User.find().countDocuments();
      const createUser = await User.create({
        ...req.body,
        id: currentCount + 1,
        avatar : req.files.map((f)=>f.path),
      });
      res.status(200).json(createUser);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  );
  
  router.delete("/:id", async (req, res) => {
    const users = await User.findByIdAndDelete(req.id);
    res.status(200).json(users);
  });
  
  module.exports = router;