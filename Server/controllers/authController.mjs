import authService from "../services/authService.mjs";

async function signUp(req, res) {
    try {
        const {name, email, password} = req.body;
        const existingUser = await authService.findOneUser({email});
        if (existingUser) {
            return res.status(400).json({success: false, message: 'User already exists'});
        }
        const user = await authService.registerUser(name, email, password);
        if (user) {
            res.status(201).json({success: true, user});
        } else {
            res.status(400).json({success: false});
        }
    } catch (err) {
        res.status(500).json(err.message);
    }
}

async function login(req, res) {
    try {
        authService.authenticateUser(req, res);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function logout(req, res) {
    try {
        authService.logoutUser(req, res);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function profile(req, res) {
    try {
        res.status(200).json({success: true, user: req.user});
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export default {signUp, login, logout, profile};