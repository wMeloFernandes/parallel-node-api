import 'reflect-metadata'
import { SetupServer } from '../config/server-config'

const app = new SetupServer()
app.init()
app.start()