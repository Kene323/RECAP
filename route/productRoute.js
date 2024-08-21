// Imports
const express = require ("express")
const {createProduct, getAllProducts, getSingleProduct, deleteProduct, updateProduct} = require("../controller/productController")

const router = express.Router()

router.route("/")
    .post(createProduct)
    .get(getAllProducts)

router.route("/:id")
    .get(getSingleProduct)
    .delete(deleteProduct)
    .patch(updateProduct)

// export
module.exports = router