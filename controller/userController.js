const User = require('../model/userModel');
exports.addUserData = async (req, res) => {
  const { name, email, contact } = req.body;

  const data = new User({
    name: name,
    email: email,
    contact: contact,
  });

  try {
    const saveData = await data.save();
    res.status(200).send(saveData);
  } catch (error) {
    res.status(400).send(error);
  }
};
