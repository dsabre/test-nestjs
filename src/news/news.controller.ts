import {Controller, Get, HttpException, HttpStatus, Param, Render} from "@nestjs/common";
import axios from "axios";

async function getNews() {
	return Array(5).fill(null).map(async (v, k) => {
		const response = await axios.get("https://baconipsum.com/api/?type=all-meat&sentences=1&format=text");

		return {
			id:     k + 1,
			title:  `News ${k + 1}`,
			image:  `https://picsum.photos/1920/1080.jpg?random=${k + 1}`,
			teaser: response.data,
			body:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci quam, tempor vel vulputate volutpat, malesuada tincidunt erat. Suspendisse potenti. Phasellus quis nulla turpis. Vestibulum tempus pharetra velit, ut aliquet massa tempus at. Vivamus at neque nec arcu pellentesque convallis. Mauris eget fermentum est. Donec eget vestibulum urna, nec laoreet ligula. Vivamus id justo suscipit, molestie risus sit amet, dapibus ipsum. Fusce elit tellus, hendrerit sed odio in, tempor auctor libero. Proin a nisl ac dolor placerat dictum et ac tortor. Maecenas pellentesque accumsan leo, id fermentum libero semper vitae. Morbi ipsum enim, auctor et euismod vitae, bibendum quis sapien. Sed semper bibendum purus ac maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
		};
	});
}

@Controller("news")
export class NewsController {

	@Get()
	@Render("pages/news")
	async news(): Promise<object> {
		return {
			news: await Promise.all(await getNews())
		};
	}

	@Get(":id")
	@Render("pages/news-details")
	async details(@Param() params): Promise<object> {
		const news = (await Promise.all(await getNews())).filter(n => n.id == parseInt(params.id));

		if (news.length < 1) {
			throw new HttpException('Not found', HttpStatus.NOT_FOUND);
		}

		return {
			newsDetails: news[0]
		};
	}
}
