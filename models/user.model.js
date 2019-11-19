const mongoose = require('mongoose');
var userSchema = now mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    saltSecret: String
    
});

mongoose.model('User', userSchema);