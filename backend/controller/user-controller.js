const User = require("../model/users-schema");

exports.signUp = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = new User({
      username: username,
      password: password,
      email: email,
    });
    user.save();
    return res.status(200).json({msg:"successfully registered!"});
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// exports.signIn = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       res.status(500).json({
//         message: "User doesn't exist",
//       });
//     } else {
//       res.json({
//         email: user.email,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await User.findById(id);
    console.log(users);
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

exports.getUser = async (req, res) => {
  // console.log("Get is called");
  try {
    const users = await User.find();
    console.log(users);
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};
