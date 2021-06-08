<template>
  <div>
    <PresentationBanner />
    <FeaturedPosts :posts="posts" />
    <WebFeatures />
    <v-container>
      <h3 class="text-center">Con 2 planes especiales para ecommerce</h3>
      <v-card>
        <v-card-title>Plan Brote</v-card-title>
        <v-card-subtitle>Para los negocios emergentes</v-card-subtitle>
      </v-card>
      <v-card>
        <v-card-title>Plan Roble</v-card-title>
        <v-card-subtitle>Establece tu empresa en Internet</v-card-subtitle>
      </v-card>
    </v-container>
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
