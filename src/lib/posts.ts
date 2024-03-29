import matter from 'gray-matter'

export async function getMarddownFilesMetadata() {
  const modules = import.meta.glob('../posts/*.md', { as: 'raw' })

  const iterablePostFiles = Object.entries(modules)
  
  const allPostFilesMetadata = await Promise.all( 
    iterablePostFiles.map(async ([filepath, resolver]) => {
      const content = await resolver()

      const matterResult = matter(content);
      const filename = filepath.slice(9, -3)

      let title: string = matterResult.data.title;
      let date: string = matterResult.data.date;
      let tags: string[] = matterResult.data.tags
      if (!title) title = 'unknown'
      if (!date) date = '2020-01-01'
      if (!tags) tags = []

      return {
        filename,
        title,
        date,
        tags
      };
    })
  )
  
  return allPostFilesMetadata.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getMarkdownPost(id: string) {
  const post = await import(`../posts/${id}.md`)
  return post
}