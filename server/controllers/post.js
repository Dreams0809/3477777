const cloudinary = require("../middleware/cloudinary");
const User = require("../models/User");



module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await User.find().sort({date: 1});
      res.json(profiles)
    } catch (err) {
      console.log(err);
    }
  }
}