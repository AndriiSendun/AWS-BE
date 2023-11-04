import { SendMessageCommand } from '@aws-sdk/client-sqs';
import { CATALOG_SQS_URL, sqsClient } from '../constants/sqs';

export const sendProductToSqs = async (product) => {
  try {
    console.log(JSON.stringify(product), 'JSON.stringify(product)');

    const input = {
      QueueUrl: CATALOG_SQS_URL,
      MessageBody: JSON.stringify(product),
    };

    console.log(input, 'input');

    const command = new SendMessageCommand(input);

    console.log('start sqs sending');

    const response = await sqsClient.send(command);

    console.log(response, 'sqs send')
  } catch(err) {
    console.log(err, 'err')
  }
}