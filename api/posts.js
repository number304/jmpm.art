import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.ghostURL,
  key: process.env.GHOST_CONTENT_KEY,
  version: 'canary',
})

export async function getPosts() {
  return await api.posts
    .browse({
      include: 'count.posts,tags,authors',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err) // eslint-disable-line
    })
}
