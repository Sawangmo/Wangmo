// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
    const sessionExpires = req.session?.cookie?.expires;

    if (req.session.user && sessionExpires && new Date(sessionExpires).getTime() > Date.now()) {
        return next(); // If session is valid, proceed to the next middleware/route handler
    }

    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Session destruction failed"); // Handle session destruction error
        }
        res.redirect('/auth/login'); // Redirect to login if session expired or user not logged in
    });
}

module.exports = { isAuthenticated };

