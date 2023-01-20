import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getSortedPostsData } from '$lib/posts';

export const prerender = true;

// const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const load = (async () => {
  // const post = await getPostFromDatabase(params.slug);
  // await sleep(2000);  // Sleeps for 2 seconds.
  const posts = getSortedPostsData();
  
  if (posts) {
    return {posts: posts};
  }

  throw error(404, 'Not found');
}) satisfies LayoutServerLoad;