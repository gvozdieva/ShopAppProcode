const express = require('express');

const router = express.Router();
const productCntrl = require('controllers/product');

router.get('/:id', async (req, res, next) => {
  const { getList } = productCntrl;
  const products = await getList();
  console.log(products);
  // res.render('list', { products });
});

module.exports = router;
