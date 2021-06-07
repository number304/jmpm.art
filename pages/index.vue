<template>
  <div>
    <PresentationBanner />
    <FeaturedPosts :posts="posts" />
    <!-- Color más oscuro #79e3b1 -->
    <WebFeatures />
  </div>
</template>

<script>
import { getPosts } from '@/api/posts'

export default {
  async asyncData() {
    const posts = await getPosts(4)
    return { posts }
  },
}
</script>

<style></style>
