export default {
  printWidth: 120,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ]
}