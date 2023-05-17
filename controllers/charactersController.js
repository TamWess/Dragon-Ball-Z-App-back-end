import Character from "../models/character.js";
import CharacterAvatar from "../models/character.js";
import mongoose from "mongoose";

const getCharacters = async (req, res, next) => {
  try {
    const charactersAvatars = await Character.find();
    console.log({charactersAvatars})
    res.json(charactersAvatars);
  } catch (error) {
    next(error);
  }
};

const getCharacterById = async (req, res, next) => {
  const characterId = req.params.characterId;
  const charactersAvatars = await CharacterAvatar.findById(characterId);
  res.json(charactersAvatars);
};

const addCharacter = async (req, res, next) => {
  let character = new Character();
  character.name = req.body.name;
  character.description = req.body.description;
  character.type = req.body.type;
  character.price = req.body.price;
  character.image = req.body.image;
  await character.save();

  res.json(character);
};

export { getCharacters, addCharacter, getCharacterById };
