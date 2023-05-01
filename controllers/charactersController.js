import Burger from "../model/Burger.js";

const getCharactersAvatars = async (req, res, next) => {
  const charactersAvatars = await Character.find();
  res.json(charactersAvatars);
};

const getCharactersAvatarsById = async (req, res, next) => {
  const productId = req.params.productId;
  const charactersAvatars = await Character.findById(productId);
  res.json(charactersAvatars);
};

const addBurger = async (req, res, next) => {
  let burger = new Character();
  burger.name = req.body.name;
  burger.description = req.body.description;
  burger.type = req.body.type;
  burger.price = req.body.price;
  burger.image = req.body.image;
  await burger.save();

  res.json(true);
};

export { getCharactersAvatars, addBurger, getCharactersAvatarsById };
