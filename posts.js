const mongoose = require('mongoose');   // Import mongoose

// Create Schema
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },

}); 

// Create Model
const Post = mongoose.model('Post', postSchema);
module.exports = Post; // Export Post model

