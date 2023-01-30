import { Request, Response } from 'express'
import { Controller, Get, Post, Patch, Delete, Middleware } from '@overnightjs/core'
import { HttpResponse } from '../protocols/http-response'

@Controller('api/v1/invoices')
export class InvoicesController {
	constructor (
	) { }

	@Get('')
	public async getAll (req: Request, res: Response): Promise<Response<HttpResponse>> {
		return res.status(200).json({})
	}

	@Get(':id')
	public async get (req: Request, res: Response): Promise<Response<HttpResponse>> {
		return res.status(200).json({})
	}

	@Post('')
	public async create (req: Request, res: Response): Promise<Response<HttpResponse>> {
		return res.status(200).json({})
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
