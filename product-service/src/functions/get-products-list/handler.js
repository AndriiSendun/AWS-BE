import { corsHeaders } from "../../constants/headers";
import { scanProducts } from "../../services/product-query.service";

export const getProductsList = async () => {
  try {
    const products = await scanProducts();

    return {
      statusCode: 200,
      headers: { ...corsHeaders },
      body: JSON.stringify(products),
    };
  } catch(err) {
    return {
      statusCode: 500,
      headers: { ...corsHeaders },
      body: JSON.stringify(err),
    };
  }
};
