import express from "express";
import { lastPlayerCalculator } from "../controllers/LastPlayerController.js";

const router = express.Router();


router.post("/last_player", lastPlayerCalculator )

export default router;
