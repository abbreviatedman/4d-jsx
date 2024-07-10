const bcrypt = require('bcrypt');

const User = require('../../models/userModel');

const createUser = async (req, res) => {
  try {
    const {username, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(password, salt);
    const user = await User.create({
      password: encryptedPass,
      favorites: [],
      username,
    });

    res.json({
      message: 'success',
      payload: user,
    });
  } catch (error) {
    const packet = {
      message: 'create user failure',
      payload: error,
    };

    console.log(packet);
    res.status(500).json(packet);
  }
}

module.exports = {createUser};
