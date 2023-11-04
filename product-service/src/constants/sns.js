import { SNSClient } from '@aws-sdk/client-sns';

export const snsClient = new SNSClient({
  region: process.env.REGION
});

export const CREATE_PRODUCT_TOPIC_ARN = `arn:aws:sns:${ process.env.REGION }:${ process.env.ACCOUNT_ID }:createProductTopic`;
