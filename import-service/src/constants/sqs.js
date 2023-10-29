import { SQSClient } from "@aws-sdk/client-sqs";

export const sqsClient = new SQSClient({
  region: process.env.REGION,
});

export const CATALOG_SQS_URL = `https://sqs.eu-west-1.amazonaws.com/295974408458/catalogsQueue`;
