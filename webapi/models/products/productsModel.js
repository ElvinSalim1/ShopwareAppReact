const mongodb = require('mongoose')
const Product = require('./productsSchema')

exports.addProducts = (req, res) => {
   try {
      for (product of req.body) {
         new Product({
            _id:              new mongodb.Types.ObjectId,
            name:             product.name,
            description:      product.description,
            shortDescription: product.shortDescription,
            image:            product.image,
            inStockAmount:    product.inStockAmount,
            price:            product.price,
            quantity:         product.quantity
         }).save()
      }
      return res.status(200).json()
   }
   catch {
      return res.status(400).json()
   }
}

exports.getProducts = (req, res) => {
   Product.find()
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error))
}

exports.getProduct = (req, res) => {
   Product.findOne({ _id: req.params.id })
      .then(product => {
         if (product === null)
            return res.status(404).json({
               statusCode: 404,
               status: false,
               message: "Unable to get product from database."
            })

         return res.status(200).json({
            statusCode: 200,
            status: true,
            message: "Getting product was successful.",
            product: {
               id:               product._id,
               name:             product.name,
               shortDescription: product.shortDescription,
               description:      product.description,
               price:            product.price,
               image:            product.image,
               inStockAmount:    product.inStockAmount,
               quantity:         product.quantity
            }
         })
      })
      .catch(error => res.status(500).json({
         statusCode: 500,
         status: false,
         message: "Unable to get product from database."
      }))
}