import { MongoClient } from "mongodb";

import { Log } from "./types";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var mongo: MongoClient | undefined;
}

const {
  EVENTPOPPER_DATABASE_URL = "mongodb://johndoe:randompassword@localhost",
} = process.env;

export const mongo = global.mongo || new MongoClient(EVENTPOPPER_DATABASE_URL);

if (process.env.NODE_ENV !== "production") global.mongo = mongo;

const db = mongo.db("production");

export const collections = {
  logs: db.collection<Log>("logs"),
};
