const { corsHeaders } = require('../../constants/headers');
const { products } = require('../../mocks/products');
const { getProductsList } = require('./handler');

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
