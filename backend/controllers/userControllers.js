const asyncHandler = require("express-async-handler");
const bcryptjs = require("bcryptjs");
const { Users } = require("../model/userModal");
const jwt = require("jsonwebtoken");

// @desc    Register a new user
// @route   api/users/
// @access  public
const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please the Fields");
  }

  //   check if the user exists
  const userInDB = await Users.findOne({ email });

  if (userInDB) {
    res.status(500);
    throw new Error("User already exists");
  }

  const salt = await bcryptjs.genSalt(Number(process.env.salt));
  const hashPassword = await bcryptjs.hash(password, salt);

  const user = await Users.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id, user.email),
    });
  } else {
    res.status(500).json({ message: "Could'nt register the user" });
  }
});

// @desc    login the user
// @route   api/users/login
// @access  public
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(500);
    throw new Error("please Enter the email and password");
  }

  const user = await Users.findOne({ email });

  if (user && (await bcryptjs.compare(password, user.password))) {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id, user.email),
    });
  } else {
    res.status(500).json({ message: "Invalid Credentials" });
  }
});

// @desc    get the user data
// @route   api/users/getMe
// @access  private
const getMe = asyncHandler(async (req, res) => {
  const { id, name, email } = await Users.findById(req.user.id).select(
    "-password"
  );
  res.status(200).json({ id, name, email });
});

// function to generate the Token
const generateToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.jwt_secret, { expiresIn: "1d" });
};

module.exports = { userLogin, userRegister, getMe };
