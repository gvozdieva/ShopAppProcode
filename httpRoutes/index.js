const express = require('express');

const router = express.Router();
const productCntrl = require('controllers/product');

router.get('/', async (req, res, next) => {
  const { getList } = productCntrl;
  const products = await getList();

  res.render('list', { products });
});

module.exports = router;
