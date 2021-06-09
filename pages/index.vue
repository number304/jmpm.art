<template>
  <div>
    <PresentationBanner />
    <FeaturedPosts :posts="posts" />
    <WebFeatures />
    <EcommercePlans />
    <SuscribeBanner />
    <PortfolioBanner />
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
