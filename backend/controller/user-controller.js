const { User } = require("../model/users-schema");

exports.signUp = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.create({
      username: username,
      password: password
    });
    return res.status(200).send({ msg: "user created successfully!" });
};

exports.signIn = async (req, res) => {
  const { username, password } = req.body;

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
      username: user.username,
      message: "Logged in successfully!"
    });
  }
};
