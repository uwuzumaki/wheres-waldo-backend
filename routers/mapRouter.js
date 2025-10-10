import { Router } from "express";
import mapController from "../controllers/maps.js";

const router = Router();

router.post("/createmap", mapController.createMap);

export default router;
