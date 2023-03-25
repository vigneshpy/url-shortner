import { Router } from "express";
import { Url, UrlDocument } from "../models/urlSchema";
import { generateShortUrl } from "../urlShortner";

const router = Router();

router.post("/shorten", async (req: any, res: any) => {
	const { longUrl } = req.body;

	const shortUrl = generateShortUrl(longUrl);

	try {
		const existingUrl = await Url.findOne({ originalUrl: longUrl });
		if (existingUrl) {
			res.status(200).json(existingUrl);
		} else {
			const newUrl = await Url.create({ originalUrl: longUrl, shortUrl });
			res.status(201).json(newUrl);
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

router.get("/urls", async (_req: any, res: any) => {
	try {
		const urls: UrlDocument[] = await Url.find();
		console.log("🚀 ~ file: routes.ts:30 ~ router.get ~ urls:", urls);
		res.status(200).json(urls);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

router.get("/url/:shortendUrl", async (_req: any, res: any) => {
	const shortUrl = _req.params.shortendUrl;

	try {
		const urls: UrlDocument[] = await Url.find({ shortUrl });
		res.status(200).json(urls);
	} catch (err) {
		console.error(err);
		res.status(400).json({ message: "url not found" });
	}
});

export default router;
