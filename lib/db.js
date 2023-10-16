import { MongoClient } from "mongodb";

async function connectToDatabase() {
  const pwParam = encodeURIComponent(process.env.MONGODB_PW);
  const client = await MongoClient.connect(
    `mongodb+srv://two4onebill:${pwParam}@cluster0.xvwjnur.mongodb.net/auth-nextjs?retryWrites=true&w=majority`
  );

  return client;
}

export default connectToDatabase;