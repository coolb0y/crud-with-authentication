const mongoose = require('mongoose');

PersonSchema = new mongoose.Schema({
    email :{
        type: String,
        required: true,
    },
    password :{
        type: String,
        required: true,
    },
    Name: String,
    
})

module.exports = mongoose.model("Person",PersonSchema);