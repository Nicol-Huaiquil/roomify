import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async (req, res) => {
  const db = await dbConnection;
  const collection = db.collection("globalData");
  const globalData = await collection.find({}).toArray();
  //console.log(globalData);
  res.send(globalData[0]);
};
