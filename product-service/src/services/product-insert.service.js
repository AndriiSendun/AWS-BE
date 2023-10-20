import { TransactWriteCommand } from "@aws-sdk/lib-dynamodb";
import { v4 } from "uuid";
import { TABLES } from "../constants/tables";
import { docClient } from "../constants/dynamo-db";

export const insertProduct = async (productBody) => {
  const { count, ...restProductBody } = productBody;
  const id = v4();

  const transactCommand = new TransactWriteCommand({
    TransactItems: [
      {
        Put: {
          TableName: TABLES.products,
          Item: {
            ...restProductBody,
            id,
          },
        },
      },
      {
        Put: {
          TableName: TABLES.stocks,
          Item: {
            product_id: id,
            count,
          },
        },
      },
    ],
  });

  await docClient.send(transactCommand);

  return { ...productBody, id };
};
