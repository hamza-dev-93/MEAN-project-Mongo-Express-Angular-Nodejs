
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.regsiter = (req, res, next) => {
    // console.log(('inside register function'));
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password
    user.save((err, doc)  => {
        if(!err) res.send(doc);
        else {
            // console.log(err);
            if(err.code == 11000) 
                res.status(422).send(['Duplicate email adress found .']);
            else return next(err);
        } 
    });
}