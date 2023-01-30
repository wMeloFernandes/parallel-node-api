import { InvoicesController } from '../main/routes/associations-routes'
import { Server } from '@overnightjs/core'
import { json, urlencoded } from 'body-parser'
import helmet from 'helmet'

export class SetupServer extends Server {

	constructor (private port = process.env.PORT || 8000) {
		super()
	}

	public init (): void {
		this.setupExpress()
		this.setupMiddlewares()
		this.setupControllers()
	}

	// Basic Express Setup
	private setupExpress (): void {
		this.app.use(json({ limit: '10mb' }))
		this.app.use(urlencoded({ extended: true }))

		// Setting Headers
		this.app.use((req, res, next) => {
			res.setHeader('Access-Control-Allow-Origin', '*')
			res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')
			res.setHeader('Content-Type', 'application/json')
			next()
		})
	}

	// Setting static directories, protection headers and CORS
	private setupMiddlewares (): void {
		this.app.use(helmet())
	}

	// Setup of controllers to enabled routes associated to it
	private setupControllers (): void {
		this.addControllers([
			new InvoicesController()
		])
	}

	// Starting Server
	public start (): void {
		// Starting server
		const server = this.app.listen(this.port, () => {
			console.log('Starting Server...')
		})

		process.on('SIGTERM', () => {
			server.close(() => { })
		})
	}
}
