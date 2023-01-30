import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getMarddownFilesMetadata } from '$lib/posts';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const load = (async (param) => {
  // const mdPostsMetaData = await getMarkdownPostsMetadata();
  console.log("PARAM:", param.url.pathname)
  const postSelected = param.url.pathname !== '/blog' ? true : false;
  console.log("Is post selected: ", postSelected)

  const frontMatter = await getMarddownFilesMetadata()
  // console.log("frontMatter:", frontMatter)

  // await sleep(2000)

  if (frontMatter) {
    return {posts: frontMatter, postSelected: postSelected};
  }

  throw error(404, 'Not found');
}) satisfies LayoutServerLoad;