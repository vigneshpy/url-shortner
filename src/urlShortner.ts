import { createHash } from "crypto";

export const generateShortUrl = (longUrl: string) => {
	const hash = createHash("sha256").update(longUrl).digest("base64");
	const shortUrl = hash.substring(0, 8); // Use the first 8 characters of the hash
	return shortUrl;
};
