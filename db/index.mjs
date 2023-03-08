import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config();

AWS.config.update({ region: process.env.REGION });

const db = new AWS.DynamoDB.DocumentClient();

export default db;
