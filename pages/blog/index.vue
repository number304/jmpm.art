<template>
  <v-container class="py-8">
    <SocialHead
      :image="tag.feature_image"
      :title="title"
      :og-description="tag.og_description || tag.description"
      :twitter-description="tag.twitter_description || tag.description"
    />
    <h1 class="text-center">¡Emprende en Internet de la mejor manera!</h1>
    <p class="text-overline text-center mb-6">Con este contenido de primera</p>

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
import { getPosts, getTag, formatDate } from '@/api/posts'

export default {
  async asyncData() {
    const posts = await getPosts()
    const tag = await getTag()
    return { posts, tag }
  },
  data() {
    return {
      title: 'Blog y SEO para volar',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.tag.description,
        },
      ],
    }
  },
  methods: {
    formatDate,
  },
}
</script>

<style></style>
