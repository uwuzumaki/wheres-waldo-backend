import { Router } from "express";
import gameController from "../controllers/game.js";

const router = Router();

router.post("/:picture", gameController.picture);
router.get("/newPlayer", gameController.createPlayer);

export default router;
