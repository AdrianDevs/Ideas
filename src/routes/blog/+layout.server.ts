import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getFrontMatter } from '$lib/posts';

export const load = (async () => {
  // const mdPostsMetaData = await getMarkdownPostsMetadata();

  const frontMatter = await getFrontMatter()
  // console.log("frontMatter:", frontMatter)

  if (frontMatter) {
    return {posts: frontMatter};
  }

  throw error(404, 'Not found');
}) satisfies LayoutServerLoad;