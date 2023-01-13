import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";

import connect from "./database/conn.js";

const app = express();

app.use(morgan("tiny"));

app.use(cors());

app.use(express.json());
config();

const port = process.env.PORT || 8000;

// routes
app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`server connected to port ${port}`);
      });
    } catch (error) {
      console.log("cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection");
  });
