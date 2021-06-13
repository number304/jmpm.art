<template>
  <v-container>
    <h1 class="text-center">¡Emprende en Internet de la mejor manera!</h1>
    <p class="text-overline text-center">Con este contenido de primera</p>

    <v-card elevation="0" class="px-2">
      <v-img :src="posts[0].feature_image"></v-img>
      <h3 class="mt-4">{{ posts[0].title }}</h3>
      <p>{{ posts[0].excerpt }}</p>
      <div class="d-flex">
        <v-avatar size="40" class="mr-2" style="border-radius: 50%">
          <v-img :src="posts[0].primary_author.profile_image"></v-img>
        </v-avatar>
        <div>
          <p class="mb-0 text-body-2 font-weight-medium">
            {{ posts[0].primary_author.name }}
          </p>
          <p class="text-body-2">
            {{ formatDate(posts[0]) }} • Lectura de
            {{ posts[0].reading_time }} min.
          </p>
        </div>
      </div>
    </v-card>
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
