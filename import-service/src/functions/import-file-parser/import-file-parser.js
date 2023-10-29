import { corsHeaders } from'../../constants/headers';
import { parseCSVFiles } from '../../services/import-file-parser.service';

export const importFileParser = async (event) => {
  console.log(event, 'importFileParser event');

  try {
    await parseCSVFiles(event.Records);

    return {
      statusCode: 200,
      headers: { ...corsHeaders },
    };
  } catch(err) {
    return {
      statusCode: 500,
      headers: { ...corsHeaders },
      body: err.message
    };
  }
};
