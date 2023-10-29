import { corsHeaders } from "../../constants/headers";
import { insertProduct } from "../../services/product-insert.service";

export const catalogBatchProcess = async (event) => {
  const promises = event.Records.map(({ body }) => {
    return insertProduct(JSON.parse(body))
  });

  await Promise.all(promises);

  return {
    statusCode: 200,
    headers: { ...corsHeaders },
    body: 'data stored',
  };
};
