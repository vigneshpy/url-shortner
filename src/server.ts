import express from "express";
import myRoutes from "./api/routes";
import { PORT, HOST } from "./constants";
import { dbConnect } from "./dbConnect";

const app = express();
dbConnect();

app.use("/", myRoutes);
app.listen(PORT, HOST, () => {
	console.log(`Server listening on port ${PORT}`);
});
