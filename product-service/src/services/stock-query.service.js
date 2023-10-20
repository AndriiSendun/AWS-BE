import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { TABLES } from "../constants/tables";
import { docClient } from "../constants/dynamo-db";

export const getStock = (productId) => {
  const command = new GetCommand({
    TableName: TABLES.stocks,
    Key: {
      product_id: productId
    }
  });

  return docClient.send(command).then(({ Item }) => Item)
};
