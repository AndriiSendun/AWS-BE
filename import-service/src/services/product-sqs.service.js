import { SendMessageCommand } from '@aws-sdk/client-sqs';
import { CATALOG_SQS_URL, sqsClient } from '../constants/sqs';

export const sendProductToSqs = (product) => {
  const input = {
    QueueUrl: CATALOG_SQS_URL,
    MessageBody: JSON.stringify(product),
  };

  const command = new SendMessageCommand(input);

  return sqsClient.send(command)
    .then(() => {
      console.log('success')
    })
    .catch((err) => {
      console.log(err, 'err')
    });
}