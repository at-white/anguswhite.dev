import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx']
		})
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx'],
	alias: { img: 'src/assets/images' }
};

export default config;
