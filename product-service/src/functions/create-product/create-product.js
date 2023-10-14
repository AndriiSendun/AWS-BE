import { corsHeaders } from'../../constants/headers';
import { insertProduct } from '../../services/product-insert.service';
import { validateProduct } from '../../services/product-validator.service';

export const createProduct = async (event) => {
  console.log(event, 'event');

  const body = JSON.parse(event.body);
  const { error } = validateProduct(body);

  if(error) {
    return {
      statusCode: 400,
      headers: { ...corsHeaders },
      body: JSON.stringify({ message: error.details })
    };
  }

  try {
    const product = await insertProduct(body);

    return {
      statusCode: 200,
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
