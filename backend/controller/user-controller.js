const User = require("../model/users-schema");

exports.signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({
      username: username,
      password: password
    });
    user.save();
    return res.status(200).send({ msg: "user created successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.signIn = async (req, res) => {
  const {username, password} = req.body;
  try {
    const user = await User.findOne({
        username: username,
        password: password
    });
    if (!user) {
      res.status(500).json({
        message: "User doesn't exist"
      });
    } else {
      res.json({
        username: user.username
      });
    }
  } catch (error) {
    console.log(error);
  }
};
