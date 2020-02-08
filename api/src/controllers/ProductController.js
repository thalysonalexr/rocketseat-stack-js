const Product = require("../models/Product");

module.exports = {
  async index (req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.status(200).json(products);
  },

  async show(req, res) {
    const { id } = req.params;

    try {
      const product = await Product.findById(id);

      return res.status(200).json(product);
    } catch (err) {
      return res.status(404).json({
        error: "[err:404] Not Found."
      });
    }
  },

  async store (req, res) {
    try {
      const product = await Product.create(req.body);

      return res.status(201).json(product);
    } catch (err) {
      return res.status(400).json({
        error: "[err:400] Bad Request."
      });
    }
  },

  async update (req, res) {
    const { id } = req.params;

    try {
      const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

      return res.status(200).json(product);
    } catch (err) {
      return res.status(400).json({
        error: "[err:400] Bad Request."
      });
    }
  },

  async destroy (req, res) {
    const { id } = req.params;

    try {
      await Product.findByIdAndRemove(id);
      return res.status(204).end();
    } catch (err) {
      return res.status(404).json({
        error: "[err:404] Not Found."
      });
    }
  }
};
