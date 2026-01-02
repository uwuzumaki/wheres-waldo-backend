import { Router } from "express";
import highscore from "../controllers/highscore.js";

const router = Router();

router.get("/", highscore.getHighScore);

export default router;
