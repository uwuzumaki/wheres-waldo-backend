import express from "express";
import router from "./routers/index.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/picture", router.game);

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
