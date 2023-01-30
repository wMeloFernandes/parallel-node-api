import { HttpResponse } from '../../../main/protocols/http-response'
import Invoice from '../../../infra/database/entity/invoice'

export class ListInvoiceById {
	constructor () { }

	async handle (id: string): Promise<HttpResponse> {
		try {
			const invoice = await Invoice.findById(id)
			return HttpResponse.build().code(200).result(invoice)
		}
		catch (err) {
			return HttpResponse.build().code(500).result({ message: 'internalServerError' })
		}
	}
}
