import { HttpResponse } from '../../../main/protocols/http-response'
import Invoice, { IInvoice } from '../../../infra/database/entity/invoice'

export class AddInvoice {
	constructor () { }

	async handle (params: IInvoice): Promise<HttpResponse> {
		try {
			const data = new Invoice(params)
			const invoice = await data.save()
			return HttpResponse.build().code(201).result(invoice)
		}
		catch (err) {
			return HttpResponse.build().code(500).result({ message: 'internalServerError' })
		}
	}
}
