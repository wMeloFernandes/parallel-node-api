import { Request, Response } from 'express'
import { Controller, Get, Post, Patch, Delete } from '@overnightjs/core'
import { HttpResponse } from '../protocols/http-response'
import { ListInvoices } from '../../data/usecases/invoices/list-invoices'
import { AddInvoice } from '../../data/usecases/invoices/add-invoice'
import { ListInvoiceById } from '../../data/usecases/invoices/list-invoice-by-id'

@Controller('api/v1/invoices')
export class InvoicesController {
	constructor (
	) { }

	@Get('')
	public async fetchAll (req: Request, res: Response): Promise<Response<HttpResponse>> {
		const result = await new ListInvoices().handle()
		return res.status((await result).statusCode).json(result.body)
	}

	@Get(':id')
	public async fetch (req: Request, res: Response): Promise<Response<HttpResponse>> {
		const result = await new ListInvoiceById().handle(req.params.id)
		return res.status(result.statusCode).json(result.body)
	}

	@Post('')
	public async add (req: Request, res: Response): Promise<Response<HttpResponse>> {
		const result = await new AddInvoice().handle(req.body)
		return res.status(200).json(result)
	}

	@Patch('')
	public async update (req: Request, res: Response): Promise<Response<HttpResponse>> {
		return res.status(200).json({})
	}

	@Delete(':id')
	public async delete (req: Request, res: Response): Promise<Response<HttpResponse>> {
		return res.status(200).json({})
	}
}
