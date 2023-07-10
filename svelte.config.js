import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
// import wrap from 'rehype-wrap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import toc from '@jsdevtools/rehype-toc';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// extensions: ['.svelte', '.md'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex()
		// mdsvex({
		// 	extensions: ['.md'],
		// 	rehypePlugins: [
		// rehypeSlug,
		// rehypeAutolinkHeadings,
		// toc
		// [wrap, { wrapper: 'main.markdown-body' }],
		// [
		// 	toc,
		// 	{
		// 		position: 'afterend',
		// 		cssClasses: {
		// 			toc: 'markdown-toc'
		// 		}
		// 	}
		// ]
		// 	]
		// })
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
