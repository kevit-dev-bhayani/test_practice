require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Application, Router } from "express";
const { PORT, MONGO_URL } = process.env;

export class App {
  public app: Application;
  public routers: Router[];

  constructor(routers: Router[]) {
    this.routers = routers;
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoute();
    this.mongooseSetup();
    // this.app.listen();
  }

  initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: true,
        methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: [
          "Authorization",
          "Content-Type",
          "Content-Length",
          "Accept",
          "Accept-Encoding",
          "Connection",
        ],
        credentials: true,
        optionsSuccessStatus: 200,
      })
    );
  }

  initializeRoute() {
    this.routers.forEach((router) => {
      this.app.use("/", router);
    });
  }

  listen() {
    this.app.listen(PORT, () => {
      console.info(`app is running on port ${PORT}`);
    });
  }

  mongooseSetup() {
    mongoose.connection.on("connected", () => {
      console.info("DB connected...!");
    });

    mongoose.connection.on("error", (error) => {
      console.error(`DB error - ${error}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn(`DB disconnected...!`);
    });

    mongoose.connect(`${MONGO_URL}`);
  }
}
// export const app: Application = express();
