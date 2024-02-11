const mongoose = require('mongoose');


// these are just containers
const productSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    url: String,
    prices: [],
    usersTracking: []
  },
  {
    timestamps: true,
    toJSON: {virtuals: true}
  }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
