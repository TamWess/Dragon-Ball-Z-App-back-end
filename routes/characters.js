import express from "express";
const router = express.Router();


import {
  getBurgers,
  addBurger,
  getBurgerById,
} from "../controller/BurgerController.js";
import { getCharactersAvatars } from "../controllers/charactersController.js";

router.get("/get", getCharactersAvatars);
router.post("/post", addBurger);
router.get("/:productId", getBurgerById);

export default router;
