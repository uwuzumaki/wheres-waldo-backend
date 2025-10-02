import { Router } from "express";
import gameController from "../controllers/game.js";

const router = Router();

router.post("/:picture", gameController.picture);

export default router;
