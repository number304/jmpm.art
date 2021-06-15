<template>
  <div>
    <SocialHead
      :title="title"
      :og-description="fbDescription"
      :twitter-description="twitterDescription"
    />
    <PresentationBanner />
    <FeaturedPosts :posts="posts" />
    <WebFeatures />
    <EcommercePlans />
    <ContactBanner id="contact" />
    <PortfolioBanner id="portfolio" />
  </div>
</template>

<script>
import { getPosts } from '@/api/posts'

export default {
  async asyncData() {
    const posts = await getPosts(4)
    return { posts }
  },
  data() {
    return {
      title: 'Conoce a tu siguiente desarrollador de confianza 💻',
      fbDescription: 'Soy Jose Miguel Pedraza Mateo, trabajemos juntos 🤝.',
      twitterDescription:
        'Soy Jose Miguel Pedraza Mateo, desarrollador web especializado en Vue y Nuxt. Contáctame y llevemos tu proyecto al siguiente nivel 🎢.',
    }
  },
}
</script>

<style></style>
