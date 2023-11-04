import { corsHeaders } from'../../constants/headers';
import { getCSVFile, parseCSVFile } from '../../services/import-file-parser.service';
import { sendProductToSqs } from '../../services/product-sqs.service';

export const importFileParser = async (event) => {
  console.log(event, 'importFileParser event');
  const [ record ] = event.Records;

  try {
    const file = await getCSVFile(record.s3.object.key);
    const products = await parseCSVFile(file);
    const sqsProducts = products.map((product) => sendProductToSqs(product));

    await Promise.all(sqsProducts);

    console.log('importFileParser success');

    return {
      statusCode: 200,
      headers: { ...corsHeaders },
      body: 'parsed'
    };
  } catch(err) {
    console.log(err, 'importFileParser err');

    return {
      statusCode: 500,
      headers: { ...corsHeaders },
      body: err.message
    };
  }
};
