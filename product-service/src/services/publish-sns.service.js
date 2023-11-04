import { PublishCommand } from "@aws-sdk/client-sns"
import { CREATE_PRODUCT_TOPIC_ARN, snsClient } from "../constants/sns"

export const publishProductToSns = async (product) => {
  const command = new PublishCommand({
    TopicArn: CREATE_PRODUCT_TOPIC_ARN,
    Message: JSON.stringify(product)
  });

  try {
    await snsClient.send(command);
    console.log('sns send');
  } catch(err) {
    console.log(err, 'sns error');
  }
}
