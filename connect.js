const Bari = [
  "public/images/Museo_Bari/IMG_0448D.JPG",
  "public/images/Museo_Bari/IMG_0449.JPG",
  "public/images/Museo_Bari/IMG_0450D.JPG",
  "public/images/Museo_Bari/IMG_0451.JPG",
  "public/images/Museo_Bari/IMG_0452.JPG",
  "public/images/Museo_Bari/IMG_0453D.JPG",
  "public/images/Museo_Bari/IMG_0454.JPG",
  "public/images/Museo_Bari/IMG_0455D.JPG",
  "public/images/Museo_Bari/IMG_0456D.JPG",
  "public/images/Museo_Bari/IMG_0457D.JPG",
  "public/images/Museo_Bari/IMG_0458D.JPG",
  "public/images/Museo_Bari/IMG_0460D.JPG",
  "public/images/Museo_Bari/IMG_0461D.JPG",
  "public/images/Museo_Bari/IMG_0462D.JPG",
  "public/images/Museo_Bari/IMG_0463D.JPG",
  "public/images/Museo_Bari/IMG_0464D.JPG",
  "public/images/Museo_Bari/IMG_0465D.JPG",
  "public/images/Museo_Bari/IMG_0466D.JPG",
  "public/images/Museo_Bari/IMG_0467D.JPG",
  "public/images/Museo_Bari/IMG_0468D.JPG",
  "public/images/Museo_Bari/IMG_0469D.JPG",
  "public/images/Museo_Bari/IMG_0470D.JPG",
  "public/images/Museo_Bari/IMG_0471.JPG",
  "public/images/Museo_Bari/IMG_0472D.JPG",
  "public/images/Museo_Bari/IMG_0473D.JPG",
  "public/images/Museo_Bari/IMG_0474D.JPG",
  "public/images/Museo_Bari/IMG_0475.JPG",
  "public/images/Museo_Bari/IMG_0476D.JPG",
  "public/images/Museo_Bari/IMG_0477D.JPG",
  "public/images/Museo_Bari/IMG_0478D.JPG",
  "public/images/Museo_Bari/IMG_0479D.JPG",
  "public/images/Museo_Bari/IMG_0481D.JPG",
  "public/images/Museo_Bari/IMG_0482D.JPG",
  "public/images/Museo_Bari/IMG_0485.JPG",
  "public/images/Museo_Bari/IMG_0486.JPG",
];

import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://mara_dev:mongodbscossa11@cluster0.lnykt.mongodb.net/Images?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "Images";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly!");
    const db = client.db(dbName);

    const col = db.collection("Museo_Bari");

    for (var n = 0; n <= Bari.length; n++) {
      var img = {
        index: n,
        url: Bari[n],
      };

      const i = await col.insertOne(img);
    }
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
