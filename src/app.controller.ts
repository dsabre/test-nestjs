import {Controller, Get, Render} from "@nestjs/common";
import {AppService} from "./app.service";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {
	}

	@Get()
	@Render("pages/index")
	index(): object {
		return {};
	}

	@Get("chi-sono")
	@Render("pages/chi-sono")
	chiSono(): object {
		return {};
	}

	@Get("metodologia")
	@Render("pages/metodologia")
	metodologia(): object {
		return {};
	}

}
