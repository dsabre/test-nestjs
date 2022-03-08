import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {NestExpressApplication} from "@nestjs/platform-express";
import {join} from "path";
import * as nunjucks from "nunjucks";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(
		AppModule
	);

	const VIEWS_DIRECTORY = "views";

	app.useStaticAssets(join(__dirname, "..", "public"));
	app.setBaseViewsDir(join(__dirname, "..", VIEWS_DIRECTORY));
	nunjucks.configure(VIEWS_DIRECTORY, {
		express:          app,
		autoescape:       true,
		throwOnUndefined: true,
		trimBlocks:       true,
		lstripBlocks:     true,
		watch:            true
	});
	app.setViewEngine("html.twig");

	await app.listen(3000);

	console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
