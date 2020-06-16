const mongoose = require('mongoose');


const subscribeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subscribedToChannel:{
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})


// ??? 
module.exports = mongoose.model('Subscriber', subscribeSchema)