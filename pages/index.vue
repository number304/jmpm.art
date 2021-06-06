<template>
  <div>
    <PresentationBanner />
    <FeaturedPosts :posts="posts" />
    <!-- Color más oscuro #79e3b1 -->
    <div style="background-color: #79e3b1">
      <v-container>
        <h2>¡Hagamos tu proyecto real!</h2>
        <p class="overline">Todas las páginas incluyen:</p>
        <client-only>
          <img
            src="../static/ecommerce_shop_plain.png"
            alt="Ecommerce shop"
            width="500"
          />
        </client-only>
      </v-container>
    </div>
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
