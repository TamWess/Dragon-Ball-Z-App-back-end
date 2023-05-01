import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// ROUTER
import charactersAvatarRoute from "./routes/characters.js";
// import accompagnementRoute from "./routes/accompagnement.js";
// import boissonRoute from "./routes/boisson.js";
// import dessertRoute from "./routes/dessert.js";
// import userApiAsync from "./router-async.js";

const app = express();

// Connextion DB
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://Adil-tmb:Cn8mxIDNMs1TfuwR@dbz.epp40hx.mongodb.net/?retryWrites=true&w=majority"
  );
}

// PORT
const PORT = process.env.PORT || 8080;

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// PATH ROUTER
app.use("/api/characters", charactersAvatarRoute);
// app.use("/api/accompagnement", accompagnementRoute);
// app.use("/api/boisson", boissonRoute);
// app.use("/api/dessert", dessertRoute);
// app.use("/api/user/async", userApiAsync);

// SERVEUR
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
