import { SQSClient } from "@aws-sdk/client-sqs";

export const sqsClient = new SQSClient({
  region: process.env.REGION,
});

export const CATALOG_SQS_URL = `https://sqs.${ process.env.REGION }.amazonaws.com/${ process.env.ACCOUNT_ID }/catalogItemsQueue`;