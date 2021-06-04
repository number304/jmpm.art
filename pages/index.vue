<template>
  <v-container>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}, por {{ post.primary_author.name }}
      </li>
    </ul>
  </v-container>
</template>

<script>
import { getPosts } from '@/api/posts'

export default {
  async asyncData() {
    const posts = await getPosts()
    return { posts }
  },
}
</script>

<style></style>
