import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  const data = req.body;
  const { email, password } = data;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid input - password should be at least 7 characters long.",
    });
    return;
  }
  const client = await connectToDatabase();
  const db = client.db();
  db.collection("users").insertone({
    email: email,
    password: password,
  });
}

export default handler;
