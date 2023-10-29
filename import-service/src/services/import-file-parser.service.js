import { GetObjectCommand } from '@aws-sdk/client-s3';
import csv from 'csv-parser';
import { client, BUCKET } from "../constants/bucket"
import { sendProductToSqs } from './product-sqs.service';

const getCSVFile = (key) => {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: key
  });

  return client.send(command);
}

const parseCSVFile = (csvFile) => {
  return new Promise((resolve, reject) => {
    const result = [];

    csvFile.Body
      .pipe(csv({ separator: ';' }))
      .on('data', (product) => {
        console.log(product, 'product')
        sendProductToSqs(product)
      })
      .on('error', reject)
      .on('end', () => {
        resolve(result);
      });
  });
}

export const parseCSVFiles = (records) => {
  const files = records.map((record) => getCSVFile(record.s3.object.key).then(parseCSVFile));

  return Promise.all(files)
}