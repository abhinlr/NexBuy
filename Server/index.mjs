import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';

import db from './config/mongodbConfig.mjs';
import passportConfig from './config/passportConfig.mjs';
import authRoute from './routes/authRoute.mjs';
import logger from './config/loggerConfig.mjs'

const app  = express();
const port = process.env.PORT || 3000;
const sessionStore = MongoStore.create({ mongoUrl: process.env.MONGO_URI,collectionName: 'sessions' });
const expressSession = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 },
})

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
})

await db();

app.use(cors({origin:['http://localhost:4200', 'https://nexbuy-ecom.web.app'],credentials:true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session({}));

passportConfig(passport);

app.use('/auth', authRoute);

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});