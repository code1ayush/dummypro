import express from "express";
const router = express.Router();

import { sellThing } from "../controllers/itemControllers.js";
import upload from "../middleware/upload.js";

// router.route("/sell").post(upload.single("image"), sellThing);
router.post("/sell", upload.single("image"), sellThing);

export default router;
