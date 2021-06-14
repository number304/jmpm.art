<template>
  <v-card elevation="0" class="px-2">
    <v-img :src="post.feature_image"></v-img>
    <h3 class="mt-4">{{ post.title }}</h3>
    <p>{{ post.excerpt }}</p>
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
  </v-card>
</template>

<script>
import { formatDate } from '@/api/posts'

export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    formatDate,
  },
}
</script>

<style></style>
