const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true }, (err) => {
    if(!err){console.log('MongoDB connection success !');}
    else{console.log('error in mongo db !' + JSON.stringify(err, undefined, 2) );}
});

require('./user.model');