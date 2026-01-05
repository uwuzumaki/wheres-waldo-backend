import { Router } from "express";
import mapController from "../controllers/maps.js";

const router = Router();

router.get("/createmap", mapController.createMap);

export default router;
