import { vpc } from "./vpc";

export const database = new sst.aws.Postgres("MyDatabase", {
	vpc,
	dev: {
		username: "postgres",
		password: "password",
		database: "postgres",
		host: "localhost",
		port: 5432,
	},
});
