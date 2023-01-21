import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
// import { getPostData2 } from '$lib/posts';

// export const prerender = true;

// const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const load = (async ( { params }) => {
  // const post = await getPostFromDatabase(params.slug);
  // await sleep(2000);  // Sleeps for 2 seconds.
  // const posts = getSortedPostsData();
  
  // const post = await getPostData2(params.post)
  // console.log(post)

  // const post = await import(`../${params.post}.md`)
  console.log("params.post", params.post)
  const post = await import(`../../../posts/${params.post}.md`)
  console.log("post", post)
  // if (post.metadata) {
  //   let { title, date } = post.metadata
  // }
  let title = 'unknown'
  let date = 'unknown'
  if (post.metadata && post.metadata['title']) {
    title = post.metadata['title']
  }
  if (post.metadata && post.metadata['date']) {
    date = post.metadata['date']
  }
 
  const content = post.default

  console.log("getPostData2")
  console.log('title:', title)
  console.log('date:', date)
  console.log('content:', content)
  
  if (post) {
    return {id:params.post, title: title, date: date, content: content};
  }

  throw error(404, 'Not found');
}) satisfies PageLoad;