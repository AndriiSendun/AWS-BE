import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { v4 } from 'uuid';
import { TABLES } from "../constants/tables";
import { docClient } from "../constants/dynamo-db";
import { insertStock } from './stock-insert.service';

const insertSimpleProduct = (productBody) => {
  const command = new PutCommand({
    TableName: TABLES.products,
    Item: {
      ...productBody,
      id: v4()
    }
  });

  return docClient.send(command).then(() => command.input.Item);
}

export const insertProduct = async (productBody) => {
  const { count, ...restProductBody } = productBody;

  const product = await insertSimpleProduct(restProductBody);

  await insertStock({ count, id: product.id });

  return {
    ...product,
    count
  };
}