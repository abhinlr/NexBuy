import passport from "passport";
import LocalStrategy from "passport-local";
import {ExtractJwt} from "passport-jwt";
import JwtStrategy from "passport-jwt/lib/strategy.js";

import authService from "../services/authService.mjs";
import User from "../models/user.mjs";

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

const passportConfig = function() {
    passport.use(new LocalStrategy({usernameField: 'email',},User.authenticate()));

    passport.serializeUser(User.serializeUser());

    passport.deserializeUser(User.deserializeUser());

    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            const user = await authService.findUserById(jwt_payload.id);
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        } catch (err) {
            return done(err, false);
        }
    }));
};

export default passportConfig;