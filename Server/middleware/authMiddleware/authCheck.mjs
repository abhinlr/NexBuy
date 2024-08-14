export default function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send({success: false});
    }
}