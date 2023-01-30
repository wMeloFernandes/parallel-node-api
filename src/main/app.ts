import mongoose, { ConnectOptions } from "mongoose";
import * as dotenv from 'dotenv'
import 'reflect-metadata'
import { SetupServer } from '../config/server-config'
dotenv.config()
mongoose.set("strictQuery", false);
mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      .then((res) => {
        const app = new SetupServer()
				app.init()
				app.start()
      })
      .catch((err) => {
        console.log(err);
      });