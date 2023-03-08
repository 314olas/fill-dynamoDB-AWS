import dotenv from 'dotenv';
import { fillTable } from './db/utils.mjs';

import products from './mockData/mockProducts.mjs';
import stocks from './mockData/mockStocks.mjs';

dotenv.config();

async function init() {
	await fillTable(process.env.PRODUCTS_TABLE_NAME, products);
	await fillTable(process.env.STOCK_TABLE_NAME, stocks);
}

init();
