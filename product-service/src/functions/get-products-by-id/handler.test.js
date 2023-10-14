import { corsHeaders } from'../../constants/headers';
import { getProductsById } from './handler';

describe('getProductsById', () => {
  it('should found product', async () => {
    const expected = {
      headers: { ...corsHeaders },
      statusCode: 200,
      body: JSON.stringify({
        description: "Short Product Description2",
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
        price: 23,
        title: "Database"
      })
    };
  
    const product = await getProductsById({
      pathParameters: {
        id: '7567ec4b-b10c-48c5-9345-fc73c48a80a3'
      }
    });
  
    expect(product).toEqual(expected);
  });

  it('should failed to found a product', async () => {
    const expected = {
      headers: { ...corsHeaders },
      statusCode: 404,
      body: JSON.stringify({
        message: "Product does not exist"
      })
    };
  
    const product = await getProductsById({
      pathParameters: {
        id: '7567ec4b-b10c-48c5-9345-fc73c48a80a323'
      }
    });
  
    expect(product).toEqual(expected);
  });
});
