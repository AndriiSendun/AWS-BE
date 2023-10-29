import { GetObjectCommand } from '@aws-sdk/client-s3';
import csv from 'csv-parser';
import stripBom from 'strip-bom-stream';
import { client, BUCKET } from "../constants/bucket"
import { sendProductToSqs } from './product-sqs.service';

export const getCSVFile = (key) => {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: key
  });

  return client.send(command);
}

export const parseCSVFile = (csvFile) => {
  console.log('start parsing csv file')
  return new Promise((resolve, reject) => {
    const result = [];

    csvFile.Body
      .pipe(stripBom())
      .pipe(csv({ separator: ';' }))
      .on('data', (product) => {
        console.log(product, 'product');
        result.push(product);
      })
      .on('error', (err) =>{
        console.log(err, 'filed to parse file');

        reject(err);
      })
      .on('end', () => {
        console.log('end parsing');

        resolve(result);
      });
  });
};
