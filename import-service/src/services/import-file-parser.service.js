import { GetObjectCommand } from '@aws-sdk/client-s3';
import csv from 'csv-parser';
import { client, BUCKET } from "../constants/bucket"

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
      .on('data', (data) => result.push(data))
      .on('error', reject)
      .on('end', () => {
        console.log(result);

        resolve(result);
      });
  });
}

export const parseCSVFiles = (records) => {
  const files = records.map((record) => getCSVFile(record.s3.object.key).then(parseCSVFile));

  return Promise.all(files)
}