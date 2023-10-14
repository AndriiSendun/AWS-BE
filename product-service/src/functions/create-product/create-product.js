import { corsHeaders } from'../../constants/headers';
import { insertProduct } from '../../services/product-insert.service';

export const createProduct = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const product = await insertProduct(body);

    return {
      statusCode: 500,
      headers: { ...corsHeaders },
      body: JSON.stringify(product),
    };
  } catch(err) {
    return {
      statusCode: 500,
      headers: { ...corsHeaders },
      body: JSON.stringify(err.message),
    };
  }
};
