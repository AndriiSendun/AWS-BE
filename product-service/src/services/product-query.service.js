import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { TABLES } from "../constants/tables";
import { docClient } from "../constants/dynamo-db";
import { getStock } from "./stock-query.service";

const scanProductsTable = () => {
  const command = new ScanCommand({
    TableName: TABLES.products
  });

  return docClient.send(command).then(({ Items }) => Items)
}

export const scanProducts = async () => {
  const products = await scanProductsTable(TABLES.products);

  const joinedProducts = products.map(async (product) => {
    const { count } = await getStock(product.id);
  
    return { ...product, count };
  });

  return Promise.all(joinedProducts);
}
