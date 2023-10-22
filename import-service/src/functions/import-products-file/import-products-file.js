import { BUCKET_URL } from '../../constants/bucket';
import { corsHeaders } from'../../constants/headers';

export const importProductsFile = async (event) => {
  console.log(event, 'importProductsFile event');

  const { name } = event.queryStringParameters;
  const signedUrl = `${ BUCKET_URL }/uploaded/${ name }`;

  return {
    statusCode: 200,
    headers: { ...corsHeaders },
    body: signedUrl
  };
};
