import { bucket } from "./bucket";
import { database } from "./database";
import { vpc } from "./vpc";

export const astro = new sst.aws.Astro("Site", {
	link: [bucket, database],
	path: "./packages/frontend",
	buildCommand: "bun run build",
	vpc,
});
