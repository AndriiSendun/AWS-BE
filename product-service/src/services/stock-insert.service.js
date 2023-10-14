import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { TABLES } from "../constants/tables";
import { docClient } from "../constants/dynamo-db";

export const insertStock = async ({ id, count }) => {
  const command = new PutCommand({
    TableName: TABLES.stocks,
    Item: {
      product_id: id,
      count
    },
  });

  return docClient.send(command);
};
