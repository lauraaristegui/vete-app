const express = require("express");
const cors = require("cors");

const clientsRouter = require("./routes/clients.routes");
const petsRouter = require("./routes/pets.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3002",
  }),
);

app.use(express.json());

app.use("/clients", clientsRouter);
app.use("/pets", petsRouter);

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});