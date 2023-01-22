import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getMarkdownPost } from '$lib/posts'

export const load = (async ( { params }) => {
  // console.log("params.post", params.post)
  const post = await getMarkdownPost(params.post)
  // const post = await import(`../../../posts/${params.post}.md`)

  let title = 'unknown'
  let date = 'unknown'
  if (post.metadata && post.metadata['title']) {
    title = post.metadata['title']
  }
  if (post.metadata && post.metadata['date']) {
    date = post.metadata['date']
  }
 
  const content = post.default

  // console.log("getPostData")
  // console.log("post", post)
  // console.log('title:', title)
  // console.log('date:', date)
  // console.log('content:', content)
  
  if (post) {
    return {id:params.post, title: title, date: date, content: content};
  }

  throw error(404, 'Not found');
}) satisfies PageLoad;