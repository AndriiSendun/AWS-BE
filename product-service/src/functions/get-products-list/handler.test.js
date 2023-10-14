import { corsHeaders } from'../../constants/headers';
import { products } from '../../mocks/products';
import { getProductsList } from './handler';

describe('getProductsList', () => {
  it('should return products', async () => {
    const expected = {
      headers: { ...corsHeaders },
      statusCode: 200,
      body: JSON.stringify([ ...products ])
    };
  
    const product = await getProductsList();
  
    expect(product).toEqual(expected);
  });
});
