import { products } from '../../mocks/products';
import { corsHeaders } from'../../constants/headers';

export const getProductsList = async () => {
  return {
    statusCode: 200,
    headers: { ...corsHeaders },
    body: JSON.stringify(products),
  };
};
