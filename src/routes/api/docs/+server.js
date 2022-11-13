import { fetchMarkdownDocs, fetchMarkdownPosts } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allDocs = await fetchMarkdownDocs()

  /*const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })*/

  //return json(sortedPosts)
  return json(allDocs)
}
