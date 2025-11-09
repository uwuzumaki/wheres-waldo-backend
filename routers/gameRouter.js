import { Router } from "express";
import gameController from "../controllers/game.js";

const router = Router();

router.post("/map/:picture", gameController.picture);
router.post("/newPlayer", gameController.createPlayer);
router.post("/gameOver", gameController.gameOver);

export default router;
