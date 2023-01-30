import mongoose, { ConnectOptions } from "mongoose";
import * as dotenv from 'dotenv'
import 'reflect-metadata'
import { SetupServer } from '../config/server-config'
dotenv.config()

mongoose.set("strictQuery", false);
mongoose
      .connect(`${process.env.MONGO_URI}/${process.env.DB_DATABASE}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      } as ConnectOptions)
      .then(async (res) => {
        const app = new SetupServer()
				app.init()
        app.start()
      })
      .catch((err) => {
        console.log(err);
      });