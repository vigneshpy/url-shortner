require("dotenv").config();

const DB_USER_NAME = process.env.DB_USER_NAME;
const DB_PASSWORD: any = process.env.DB_PASSWORD;
export const PORT: any = process.env.PORT || 3000;

export const DB_URI = `mongodb+srv://${DB_USER_NAME}:${encodeURIComponent(
	DB_PASSWORD
)}@nodeapi.nanq9jd.mongodb.net/?retryWrites=true&w=majority`;
