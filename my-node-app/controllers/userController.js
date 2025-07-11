const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const secret = 'EVM_SECRET';

exports.register = (req, res) => {
  const { name, email, password, role } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).send(err);
    User.create({ name, email, password: hash, role }, (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send({ message: 'User Registered!' });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(401).send({ message: 'User not found' });

    const user = results[0];
    bcrypt.compare(password, user.password, (err, match) => {
      if (!match) return res.status(401).send({ message: 'Wrong password' });

      const token = jwt.sign({ id: user.id, role: user.role }, secret, { expiresIn: '1h' });
      res.send({ token, role: user.role, name: user.name });
    });
  });
};
