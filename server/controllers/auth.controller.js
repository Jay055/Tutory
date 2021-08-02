const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async (req, res) => {
  const { email, password, name } = req.body.user;

  const user = await User.findOne({ email }).exec();

  if (user) return res.status(409).send({ error: 'User already exists' });

  try {
    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({ email, name, password: hashPassword });

    const currentUser = await newUser.save();
    req.session.uid = currentUser._id;
    currentUser.password = undefined;
    res.status(201).send({
      currentUser,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ err: 'User could not be registered' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body.user;

    let user = await User.findOne({ email }).exec();

    if (!user) return res.status(401).send('Invalid Username or password');

    const passwordMatch = await bcrypt.compareSync(password, user.password);

    if (!passwordMatch)
      return res.status(400).send({ err: 'Invalid Username or password' });

    req.session.uid = user._id;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '3d',
    });
    console.log(req.session.uid);
    user.password = undefined;

    res.cookie('token', token, { httpOnly: true });
    res.status(201).send({ user });
  } catch (err) {
    console.log({ err: err });
  }
};

const profile = async (req, res) => {
  try {
    const user = await User.findById(req.session.uid)
      .select('-password')
      .exec();

    res.status(200).send(user);
  } catch {
    res.status(404).send({ error, message: 'User not found' });
  }
};

const logout = (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('sid');
    res.clearCookie('token');
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send({ error: 'Logout not successful' });
  }
};

module.exports = { login, register, profile, logout };
