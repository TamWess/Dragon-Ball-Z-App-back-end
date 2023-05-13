import express from "express";

const router = express.Router();

import {
  addCharacter,
  getCharacterById,
  getCharacters,
} from "../controllers/charactersController.js";

router.get("", getCharacters);
router.post("", addCharacter);
router.get("/:characterId", getCharacterById);

export default router;
