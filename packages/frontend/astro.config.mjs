import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import aws from "astro-sst";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	output: "server",
	adapter: aws(),
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
		ssr: {
			noExternal: ["@payloadcms/richtext-lexical"],
		},
	},
});
