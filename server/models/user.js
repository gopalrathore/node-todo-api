var mongoose = require('mongoose');

var User = mongoose.model('user', {
    email: {
        require: true,
        minlength: 1,
        trim: true,
        type: String
    }
});