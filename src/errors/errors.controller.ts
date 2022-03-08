import {Controller, Get, Render} from "@nestjs/common";

@Controller('error')
export class ErrorsController {

	@Get("404")
	@Render("pages/errors/404")
	notFound(): object {
		return {};
	}

	@Get("500")
	@Render("pages/errors/500")
	generic(): object {
		return {};
	}
}
