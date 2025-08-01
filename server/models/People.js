const mongoose = require('mongoose')

const People = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },

    Name:{
        type: String,
        required: true
    },

    // teamName:{
    //     type: String,
    // },

    // pokemonTeam:{
    //     type: [String]
    // },

    createdAt:{
        type: Date,
        default: Date.now
    },


});
