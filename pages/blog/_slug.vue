<template>
  <div>
    <v-container class="dev-post-header pt-8 pb-6">
      <h1 class="mb-4 text-h3 font-weight-bold">{{ post.title }}</h1>
      <p class="dev-post-excerpt text-h6 font-weight-regular mb-4">
        {{ post.excerpt }}
      </p>
      <div class="d-flex">
        <v-avatar size="40" class="mr-2" style="border-radius: 50%">
          <v-img :src="post.primary_author.profile_image"></v-img>
        </v-avatar>
        <div>
          <p class="mb-0 text-body-2 font-weight-medium">
            {{ post.primary_author.name }}
          </p>
          <p class="text-body-2">
            {{ formatDate(post) }} • Lectura de {{ post.reading_time }} min.
          </p>
        </div>
      </div>
    </v-container>
    <v-container class="pa-0">
      <v-img
        max-width="1200px"
        :aspect-ratio="3 / 2"
        :src="post.feature_image"
      ></v-img>
    </v-container>
  </div>
</template>

<script>
import { getSinglePost, formatDate } from '@/api/posts'

export default {
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug)
    return { post }
  },
  methods: {
    formatDate,
  },
}
</script>

<style lang="sass">
.dev-post-header
  max-width: 700px

  h1
    line-height: 1.15

  .dev-post-excerpt
    line-height: 1.4em
    opacity: 0.6
</style>
