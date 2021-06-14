<template>
  <v-container>
    <h1 class="text-center">¡Emprende en Internet de la mejor manera!</h1>
    <p class="text-overline text-center">Con este contenido de primera</p>

    <v-row>
      <v-col
        v-for="(post, index) in posts"
        :key="index"
        cols="12"
        sm="6"
        :md="index === 0 ? 12 : 4"
      >
        <PostCard :post="post" :index="index" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getPosts, formatDate } from '@/api/posts'

export default {
  async asyncData() {
    const posts = await getPosts()
    return { posts }
  },
  methods: {
    formatDate,
  },
}
</script>

<style></style>
