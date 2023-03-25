import bodyParser from "body-parser";
import express from "express";
import myRoutes from "./api/routes";
import { dbConnect } from "./dbConnect";

const app = express();
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", myRoutes);
app.listen(3000);
