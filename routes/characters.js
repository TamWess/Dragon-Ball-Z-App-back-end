import express from "express";
const router = express.Router();

import {
  getBurgers,
  addBurger,
  getBurgerById,
} from "../controller/BurgerController.js";

router.get("/get", getBurgers);
router.post("/post", addBurger);
router.get("/:productId", getBurgerById);

export default router;
