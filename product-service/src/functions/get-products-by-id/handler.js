import { corsHeaders } from'../../constants/headers';
import { queryProductById } from '../../services/product-query.service';

export const getProductsById = async (event) => {
  const product = await queryProductById(event.pathParameters.id);

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
