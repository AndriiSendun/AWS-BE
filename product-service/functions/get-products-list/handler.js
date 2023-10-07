const { products } = require('../../mocks/products');
const { corsHeaders } = require('../../constants/headers');

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    headers: { ...corsHeaders },
    body: JSON.stringify(products),
  };
};
