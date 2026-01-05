import express from "express";
import router from "./routers/index.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173", "https://wheres-waldo2.netlify.app"],
    credentials: true,
  })
);

app.use("/map", router.map);
app.use("/picture", router.game);
app.use("/highscores", router.highscore);

app.use((err, req, res, next) => {
  console.error(" ERROR:", err);
  res.status(500).json({
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? undefined : err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
