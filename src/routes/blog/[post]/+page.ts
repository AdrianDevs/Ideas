import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getMarkdownPost } from '$lib/posts';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const load = (async ({ params }) => {
	const post = await getMarkdownPost(params.post);

	let title = 'unknown';
	let date = 'unknown';
	if (post.metadata && post.metadata['title']) {
		title = post.metadata['title'];
	}
	if (post.metadata && post.metadata['date']) {
		date = post.metadata['date'];
	}

	const content = post.default;

	await sleep(2000);

	if (post) {
		return { id: params.post, title: title, date: date, content: content };
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
