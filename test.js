import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://mara_dev:mongodbscossa11@cluster0.lnykt.mongodb.net/Images?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly!");
    const col = client.db("Images").collection("Museo_Bari");
    const list = col.find({ index: { $gte: 0 } });
    console.log(list);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
