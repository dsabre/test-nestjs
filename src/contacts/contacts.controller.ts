import {Body, Controller, Get, Post, Render} from "@nestjs/common";

@Controller('contatti')
export class ContactsController {

	@Get()
	@Render("pages/contatti")
	contatti(): object {
		return {};
	}

	@Post()
	send(@Body("firstName") firstName, @Body("lastName") lastName, @Body("message") message): object {
		return {firstName, lastName, message};
	}
}
