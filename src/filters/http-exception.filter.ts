import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import {Response} from "express";

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {

	catch(exception: HttpException, host: ArgumentsHost) {
		const response = host.switchToHttp().getResponse<Response>();

		try {
			switch (exception.getStatus()) {
				case 404:
					return response.redirect(`/error/${exception.getStatus()}`);
			}
		} catch (e) {
		}

		return response.redirect(`/error/500`);
	}
}
