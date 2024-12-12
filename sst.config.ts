/// <reference path="./.sst/platform/config.d.ts" />
import { readdirSync } from "node:fs";
export default $config({
	app(input) {
		return {
			name: "payload-astro",
			removal: input?.stage === "production" ? "retain" : "remove",
			home: "aws",
			providers: {
				aws: {
					version: "6.61.0",
					region: "ap-northeast-1",
					profile: "demo-dev",
				},
			},
		};
	},
	async run() {
		const outputs = {};
		for (const value of readdirSync("./infra/")) {
			const result = await import(`./infra/${value}`);
			if (result.outputs) Object.assign(outputs, result.outputs);
		}
		return outputs;
	},
});
