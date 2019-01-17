const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: { type: Number, required: true }
});

// Export the model to use it with other files in the project
module.exports = mongoose.model('Product', ProductSchema);
