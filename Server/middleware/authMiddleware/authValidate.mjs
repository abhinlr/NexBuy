import { body, validationResult } from 'express-validator';

export const loginValidationRules = [
    body('email').isEmail().withMessage('Please enter a valid email address.'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
];

export const registerValidationRules = [
    body('name').not().isEmpty().withMessage('Username is required.'),
    body('email').isEmail().withMessage('Please enter a valid email address.'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long.')
];

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map(err => ({
            msg: err.msg,
            value: err.value,
            path: err.path
        }));
        return res.status(400).json({ success: false, errors: formattedErrors });
    }
    next();
};