<template>
  <v-container>
    <h2 class="text-h4 text-center mt-6 mb-2">
      Mis últimos posts con tips para emprender online
    </h2>
    <div style="max-width: 1000px" class="mx-auto d-flex">
      <v-card elevation="0" width="392" class="pa-4">
        <h3 class="pa-4 pb-0">{{ posts[0].title }}</h3>
        <v-card-subtitle
          >Por {{ posts[0].primary_author.name }}</v-card-subtitle
        >
        <v-img
          cover
          class="mx-4"
          height="250px"
          :src="posts[0].feature_image"
        ></v-img>
        <v-card-text>{{ posts[0].meta_description }}</v-card-text>
      </v-card>
      <v-divider vertical class="ma-2"></v-divider>
    </div>
  </v-container>
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
