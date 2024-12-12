import { bucket } from "./bucket";
import { database } from "./database";
import { vpc } from "./vpc";

export const cms = new sst.aws.Nextjs("CMS", {
	path: "./packages/cms",
	link: [bucket, database],
	vpc,
});
