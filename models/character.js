import mongoose from "mongoose";
const { Schema } = mongoose;

const CharacterSchema = new Schema(
  {
    img: {
      type: String,
    },
    name: {
      type: String,
      unique: true,
      index: true,
    },
    maxLevel: {
      type: String,
    },
    biography: {
      type: String,
    },
    thumbmail: {
      type: String,
    },
  },
  {
    collection: "Characters",
    timestamps: true,
  }
);

const Character = mongoose.model("DBZCharacter", CharacterSchema);

export default Character;
