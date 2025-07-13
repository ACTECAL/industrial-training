const db = require('../config/db');
const bcrypt = require('bcrypt');
const { insertUser, findUserByEmail } = require('../models/userModel');

const { decrypt } = require('dotenv');

const createUser = async (req, res) => {
    const { name, mobile, email, password, role } = req.body;
    try {
        if (!name || !mobile || !email || !password || !role) {
            return res.status(400).send({
                success: false,
                message: 'All fields are required: name, mobile, email, password, role.'
            });
        }
         const hashPassword = await bcrypt.hash(password,10);
        const data = await insertUser(name, mobile, email, hashPassword, role);

        if (!data) {
            return res.status(500).send({
                success: false,
                message: 'Failed to insert user data into the database.'
            });
        }

        return res.status(201).send({
            success: true,
            message: 'User registered successfully.'
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'An error occurred while creating the user.',
            error
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found. Please register first.'
            });
        }
        const data = await bcrypt.compare(password,user.password);
        if (!data) {
            return res.status(401).send({
                success: false,
                message: 'Incorrect password. Please try again.'
            });
        }
        return res.status(200).send({
            success: true,
            message: 'Login successful.',
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Server error during login.',
            error
        });
    }
};
module.exports = {createUser,loginUser};