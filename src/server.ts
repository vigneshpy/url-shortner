import express from "express";
import myRoutes from "./api/routes";
import { PORT } from "./constants";
import { dbConnect } from "./dbConnect";

const app = express();
dbConnect();

app.use("/", myRoutes);
app.listen(PORT);
