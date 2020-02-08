const express = require("express");
const ProductControlller = require("./controllers/ProductController");

const router = express.Router();

router.get("/products", ProductControlller.index);
router.get("/products/:id", ProductControlller.show);
router.post("/products", ProductControlller.store);
router.put("/products/:id", ProductControlller.update);
router.delete("/products/:id", ProductControlller.destroy);

module.exports = router;
