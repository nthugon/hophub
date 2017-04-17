const router = require('express').Router();
const jsonParser = require('body-parser').json();
const User = require('../models/user');

router.put('/roles/:id', jsonParser, (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(saved => res.send(saved))
        .catch(next);
});

module.exports = router;
