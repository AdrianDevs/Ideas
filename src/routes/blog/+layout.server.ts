import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getMarkdownPostsMetadata } from '$lib/posts';

export const load = (async () => {
  const mdPostsMetaData = await getMarkdownPostsMetadata();

  if (mdPostsMetaData) {
    return {posts: mdPostsMetaData};
  }

  throw error(404, 'Not found');
}) satisfies LayoutServerLoad;