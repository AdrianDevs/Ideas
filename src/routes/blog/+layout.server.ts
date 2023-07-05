import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getMarddownFilesMetadata } from '$lib/posts';

export const load = (async (param) => {
	console.log('PARAM:', param.url.pathname);
	const postSelected = param.url.pathname !== '/blog' ? true : false;
	console.log('Is post selected: ', postSelected);

	const frontMatter = await getMarddownFilesMetadata();

	if (frontMatter) {
		return { posts: frontMatter, postSelected: postSelected };
	}

	throw error(404, 'Not found');
}) satisfies LayoutServerLoad;
