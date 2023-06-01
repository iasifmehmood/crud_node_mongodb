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

exports.getAllData = async (req, res) => {
  try {
    const getAllData = await User.find();
    res.status(200).send(getAllData);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getSingleData = async (req, res) => {
  try {
    const id = req.params.id;
    const getSingleData = await User.findById(id);
    res.status(200).send(getSingleData);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await User.findByIdAndDelete(id);
    res.status(200).send(deleteData);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateData = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await User.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
