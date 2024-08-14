import passport from "passport";
import jwt from "jsonwebtoken";

import User from "../models/user.mjs";

const registerUser = async (name, email, password) => {
    try {
        const newUser = new User({ name, email });
        return await User.register(newUser, password);
    } catch (err) {
        throw new Error(err.message);
    }
};

const findUserById = async (id) => {
    try {
        return await User.findById(id);
    } catch (err) {
        throw new Error(err.message);
    }
}

const findOneUser = async (query) => {
    try {
        return await User.findOne(query);
    } catch (err) {
        throw new Error(err.message);
    }
}

const authenticateUser = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(401).json({ success: false, message: err.message });
        }
        if (!user) {
            return res.status(401).json({ success: false, message: info.message });
        }
        req.logIn(user, async (err) => {
            if (err) {
                return res.status(401).json({ success: false, message: err.message });
            }
            try {
                const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                return res.json({ success: true, token });
            } catch (err) {
                return res.status(500).json({ success: false, message: 'Token generation failed' });
            }
        });
    })(req, res, next);
};

const logoutUser = (req, res) => {
    req.logout(err => {
        if (err) {
            res.status(400).json({ success: false, message: err.message });
        }
        res.status(200).json({ success: true });
    });
};

export default { registerUser, authenticateUser, logoutUser, findUserById, findOneUser };