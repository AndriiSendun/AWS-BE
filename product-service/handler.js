const { getProductsList } = require('./functions/get-products-list/handler');
const { getProductsById  } = require('./functions/get-products-by-id/handler');

module.exports = {
  getProductsList,
  getProductsById
};
