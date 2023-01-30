import { HttpResponse } from '../../../main/protocols/http-response'
import Invoice from '../../../infra/database/entity/invoice'

export class ListInvoices {
	constructor () { }

	async handle (): Promise<HttpResponse> {
		try {
			const invoices = await Invoice.find()
			return HttpResponse.build().code(201).result(invoices)
		}
		catch (err) {
			return HttpResponse.build().code(500).result({ message: 'internalServerError' })
		}
	}
}
