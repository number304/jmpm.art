<template>
  <v-container class="px-0" style="min-width: 100%; max-width: 1000px">
    <h2 class="text-h4 text-center mt-6 mb-4 mx-auto" style="max-width: 600px">
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
        <v-card-text>{{ posts[0].excerpt }}</v-card-text>
      </v-card>
      <v-divider vertical class="ma-2"></v-divider>
      <div>
        <v-card elevation="0" class="pa-4 d-flex">
          <div style="width: 60%">
            <h3 class="pa-4 pb-0">{{ posts[1].title }}</h3>
            <v-card-subtitle
              >Por {{ posts[1].primary_author.name }}</v-card-subtitle
            >
            <v-card-text>{{ posts[1].excerpt }}</v-card-text>
          </div>
          <v-img
            cover
            class="mx-1"
            style="width: 200px"
            height="200px"
            :src="posts[1].feature_image"
          ></v-img>
        </v-card>
        <v-divider></v-divider>
        <div class="d-flex">
          <v-card elevation="0" class="pa-4" style="width: 48%">
            <h3 class="pa-4 pb-0">{{ posts[2].title }}</h3>
            <v-card-text>{{ posts[2].excerpt }}</v-card-text>
          </v-card>
          <v-divider vertical class="ma-2"></v-divider>
          <v-card elevation="0" class="pa-4" style="width: 48%">
            <h3 class="pa-4 pb-0">{{ posts[3].title }}</h3>
            <v-card-text>{{ posts[3].excerpt }}</v-card-text>
          </v-card>
        </div>
      </div>
    </div>
    <div class="d-flex justify-center">
      <v-btn color="primary mt-1">Ver todo</v-btn>
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
