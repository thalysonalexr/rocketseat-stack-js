const { model, Schema } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}, { timestamps: true });

ProductSchema.plugin(mongoosePaginate);

module.exports = model("Product", ProductSchema);
