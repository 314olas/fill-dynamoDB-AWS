import db from './index.mjs';

export async function fillTable(tableName, items) {
	if (!items) {
		return;
	}

	for (const item of items) {
		const p = await db
			.put({
				TableName: tableName,
				Item: item,
			})
			.promise();
	}
}
