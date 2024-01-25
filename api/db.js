import { Sequelize } from "sequelize";
import environtment from "dotenv";

const env = environtment.config();

const db = new Sequelize(
	env.parsed.POSTGRES_DATABASE,
	env.parsed.POSTGRES_USERNAME,
	env.parsed.POSTGRES_PASSWORD,
	{
		host: env.parsed.POSTGRES_HOST,
		dialect: "postgres",
		port: env.parsed.POSTGRES_PORT,
		operatorAliases: false,
		pool: {
			max: 1000,
			min: 0,
			idle: 200000,
			acquire: 1000000,
		},
	}
);

export default db;
