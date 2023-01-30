export class HttpResponse {
	statusCode!: number
	body!: any

	code (statusCode: number) {
		this.statusCode = statusCode
		return this
	}

	result (body: any) {
		this.body = body
		return this
	}

	static build () {
		return new HttpResponse()
	}
}
