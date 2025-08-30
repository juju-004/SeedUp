import { MongoClient, Collection } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
const clientPromise = client.connect();

export interface UserDoc {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  hashed_password?: string;
}

export interface SessionDoc {
  _id: string;
  user_id: string;
  expires_at: Date;
}

export interface CropDoc {
  _id: string;
  user_id: string; // links crop to a specific user
  crop_name: string; // e.g. "Maize"
  planting_date: string; // date of planting
}

export const getCollections = async (): Promise<{
  users: Collection<UserDoc>;
  sessions: Collection<SessionDoc>;
  crops: Collection<CropDoc>;
}> => {
  const db = (await clientPromise).db();
  return {
    users: db.collection<UserDoc>("users"),
    sessions: db.collection<SessionDoc>("sessions"),
    crops: db.collection<CropDoc>("crops"),
  };
};
