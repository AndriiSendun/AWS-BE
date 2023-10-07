import { products } from '../../mocks/products';
import { corsHeaders } from'../../constants/headers';

export const getProductsById = async (event) => {
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
