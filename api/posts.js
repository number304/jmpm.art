import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.ghostURL,
  key: process.env.apiKey,
  version: 'canary',
})

export async function getPosts(limit = 'all') {
  return await api.posts
    .browse({
      filter: 'tag:seo-y-emprendimiento',
      include: 'count.posts,authors',
      limit,
    })
    .catch((err) => {
      console.error(err) // eslint-disable-line
    })
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({ slug: postSlug }, { include: 'authors' })
    .catch((err) => {
      console.error(err) // eslint-disable-line
    })
}

export async function getTag() {
  return await api.tags.read({ slug: 'seo-y-emprendimiento' })
}

export function formatDate(post) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  const dateFormatted = new Intl.DateTimeFormat('es', options).format(
    new Date(post.published_at)
  )

  return dateFormatted
}
