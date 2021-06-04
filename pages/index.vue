<template>
  <v-container>
    <ul>
      <li v-for="post in posts" :key="post.title">{{ post.title }}</li>
    </ul>
  </v-container>
</template>

<script>
import { getPosts } from '@/api/posts'

export default {
  async asyncData() {
    const posts = await getPosts()
    return { posts: posts }
  }
}
</script>

<style>

</style>