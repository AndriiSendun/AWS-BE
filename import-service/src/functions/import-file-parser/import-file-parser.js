import { corsHeaders } from'../../constants/headers';
import { getCSVFile, parseCSVFile } from '../../services/import-file-parser.service';

export const importFileParser = async (event) => {
  console.log(event, 'importFileParser event');

  try {
    const file = await getCSVFile(record.s3.object.key);
    const promises = await parseCSVFile(file);
    const lol = await Promise.all(promises);

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
