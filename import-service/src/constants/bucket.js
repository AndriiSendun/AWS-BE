import { S3Client } from '@aws-sdk/client-s3';

export const BUCKET = 'uploaded-aws-shop';

export const BUCKET_URL = `https://${ BUCKET }.s3.eu-west-1.amazonaws.com`;

export const client = new S3Client({ region: 'eu-west-1' });