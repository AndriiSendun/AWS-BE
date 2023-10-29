import { corsHeaders } from "../../constants/headers";
import { insertProduct } from "../../services/product-insert.service";
import { publishProductToSns } from '../../services/publish-sns.service';

export const catalogBatchProcess = async (event) => {
  console.log(event, 'event');

  const promises = event.Records.map(({ body }) => {
    console.log(body, 'body');
    const product = JSON.parse(body);

    console.log(product, 'parsed product')

    return insertProduct(product)
      .then((createdProduct) => publishProductToSns(createdProduct));
  });

  await Promise.all(promises);

  return {
    statusCode: 200,
    headers: { ...corsHeaders },
    body: 'data stored',
  };
};
