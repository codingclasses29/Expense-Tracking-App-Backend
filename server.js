import dotenv from "dotenv";
dotenv.config(); // 👈 .env file load hogi

import app from "./index.js";
import { connectToMongoDB } from "./src/config/mongodb.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`server is listening at port ${PORT}`);
  await connectToMongoDB();
});
