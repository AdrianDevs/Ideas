interface metadata {
    title: string | null,
    date: string | null,
    tags: string[]
}

interface post {
  metadata: metadata
}

export const getMarkdownPostsMetadata = async () => {
  const allPostFiles = import.meta.glob('../posts/*.md')
  // console.log("allPostFiles:", allPostFiles)

  const iterablePostFiles = Object.entries(allPostFiles)
  // console.log("iterablePostFiles:", iterablePostFiles)

  const allPostFilesMetadata = await Promise.all(
    iterablePostFiles.map(async ([filepath, resolver]) => {

      const post = await resolver() as post
      const filename = filepath.slice(9, -3)
      // const metadata = post.metadata 
      let metadata: metadata = {
        title: "unknown",
        date: null,
        tags: []
      }
      if (post.metadata) {
        metadata ={...metadata, ...post.metadata }
      }

      // console.log("post:", post)
      // console.log("filename:", filename)
      // console.log("filepath:", filepath)
      // console.log("metadata:", metadata)
      

      return {
        filename: filename,
        filepath: filepath,
        metadata: metadata
      }
    })
  )
  return allPostFilesMetadata
}
