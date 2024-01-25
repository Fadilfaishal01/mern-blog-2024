import express from "express";
import db from "./db.js";

const app = express();

db.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch((err) => {
		console.error("Unable to connect to the database:", err);
	});

app.listen(3000, () => {
	console.log("Successfully Connected This Port");
});
