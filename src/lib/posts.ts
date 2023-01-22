import matter from 'gray-matter'

// interface metadata {
//     title: string,
//     date: string,
//     tags: string[]
// }

// interface post {
//   metadata: metadata
// }

export async function getFrontMatter() {
  const modules = import.meta.glob('../posts/*.md', { as: 'raw' })
  // console.log('modules', modules)

  const iterablePostFiles = Object.entries(modules)
  
  const allPostFilesMetadata = await Promise.all( 
    iterablePostFiles.map(async ([filepath, resolver]) => {
      const content = await resolver()
      // console.group("filepath:", filepath)
      // console.log("content:", content)

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(content);
      const filename = filepath.slice(9, -3)

      let title: string = matterResult.data.title;
      let date: string = matterResult.data.date;
      let tags: string[] = matterResult.data.tags
      if (!title) title = 'unknown'
      if (!date) date = '2020-01-01'
      if (!tags) tags = []

      // console.log("matter:", matterResult)
      // console.log("filename:", filename)
      // console.log("matter data:", matterResult.data)
      // console.log("matter title:", title)
      // console.log("matter date:", date)
      // console.log("matter tags:", tags)
      // console.groupEnd()

      return {
        filename,
        title,
        date,
        tags
      };
    })
  )
  
  // return allPostFilesMetadata
  return allPostFilesMetadata.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else {
      return -1;
    }
  });
}

// export const getMarkdownPostsMetadata = async () => {
//   const allPostFiles = import.meta.glob('../posts/*.md')
//   // console.log("allPostFiles:", allPostFiles)

//   const iterablePostFiles = Object.entries(allPostFiles)
//   // console.log("iterablePostFiles:", iterablePostFiles)

//   const allPostFilesMetadata = await Promise.all(
//     iterablePostFiles.map(async ([filepath, resolver]) => {

//       const post = await resolver() as post
//       const filename = filepath.slice(9, -3)

//       // const metadata = post.metadata 
//       let metadata: metadata = {
//         title: "unknown",
//         date: "2019-01-01",
//         tags: []
//       }
//       if (post.metadata) {
//         console.log("post has metadata")
//         metadata = {...metadata, ...post.metadata }
//       } else {
//         console.log("post does not have metadata")
//       }

//       // console.log("post:", post)
//       // console.log("filename:", filename)
//       // console.log("filepath:", filepath)
//       // console.log("metadata:", metadata)
      
//       return {
//         filename: filename,
//         filepath: filepath,
//         metadata: metadata
//       }
//     })
//   )
//   // return allPostFilesMetadata

//   // Sort posts by date
//   return allPostFilesMetadata.sort(({ metadata: a }, { metadata: b }) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }

export async function getMarkdownPost(id: string) {
  const post = await import(`../posts/${id}.md`)
  return post
}