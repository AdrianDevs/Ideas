import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getFrontMatter } from '$lib/posts';

export const load = (async (param) => {
  // const mdPostsMetaData = await getMarkdownPostsMetadata();
  console.log("PARAM:", param.url.pathname)
  const postSelected = param.url.pathname !== '/blog' ? true : false;
  console.log("Is post selected: ", postSelected)

  const frontMatter = await getFrontMatter()
  // console.log("frontMatter:", frontMatter)

  if (frontMatter) {
    return {posts: frontMatter, postSelected: postSelected};
  }

  throw error(404, 'Not found');
}) satisfies LayoutServerLoad;