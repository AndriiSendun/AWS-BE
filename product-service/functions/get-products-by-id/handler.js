const { products } = require('../../mocks/products');
const { corsHeaders } = require('../../constants/headers');

module.exports.getProductsById = async (event) => {
  const product = products.find(({ id }) => id === event.pathParameters.id);

  if(!product) {
    return {
      statusCode: 404,
      headers: { ...corsHeaders },
      body: JSON.stringify({ message: 'Product does not exist' }),
    };
  }

  return {
    statusCode: 200,
    headers: { ...corsHeaders },
    body: JSON.stringify(product),
  };
};
