import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log(`O'kanban API est lancé sur le port ${process.env.PORT}`);
});
