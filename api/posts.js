import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_KEY,
  version: 'canary'
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all'
    })
    .catch(err => {
      console.log(err)
    })
}