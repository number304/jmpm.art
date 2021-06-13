import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.ghostURL,
  key: process.env.apiKey,
  version: 'canary',
})

export async function getPosts(limit = 'all') {
  return await api.posts
    .browse({
      include: 'count.posts,tags,authors',
      limit,
    })
    .catch((err) => {
      console.error(err) // eslint-disable-line
    })
}
