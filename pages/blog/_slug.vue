<template>
  <div>
    <SocialHead
      :image="post.feature_image"
      :title="post.title"
      :og-description="post.og_description || post.excerpt"
      :twitter-description="post.twitter_description || post.excerpt"
    />
    <v-container id="dev-post-header" class="pt-8 pb-6">
      <h1 class="mb-4 text-sm-h3 text-h4 font-weight-bold">{{ post.title }}</h1>
      <p class="dev-post-excerpt text-h6 font-weight-regular mb-4">
        {{ post.excerpt }}
      </p>
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
    </v-container>
    <v-container class="pa-0">
      <v-img
        max-width="1200px"
        :aspect-ratio="3 / 2"
        :src="post.feature_image"
      ></v-img>
    </v-container>
    <v-container id="dev-post-body"></v-container>
  </div>
</template>

<script>
import { getSinglePost, formatDate } from '@/api/posts'

export default {
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug)
    return { post }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.excerpt,
        },
      ],
    }
  },
  mounted() {
    document
      .querySelector('#dev-post-body')
      .insertAdjacentHTML('afterbegin', this.post.html)
  },
  methods: {
    formatDate,
  },
}
</script>

<style lang="sass">
#dev-post-header
  max-width: 720px

  h1
    line-height: 1.15

  .dev-post-excerpt
    line-height: 1.4em
    opacity: 0.6

#dev-post-body
  max-width: 720px

  h2
    margin-top: 2em

  blockquote
    margin-top: 5vmin
    position: relative
    font-family: Georgia,Times,serif
    font-style: italic
    @media (max-width: 599px)
      font-size: 1.1rem
    font-size: 1.3rem
    &:before
      content: ""
      position: absolute
      @media (max-width: 599px)
        left: -2.5vmin
      left: -0.6em
      top: 0
      bottom: 0
      width: .3rem
      background: #a9ffcb

  p
    margin-top: 5vmin
    line-height: 1.6em
    font-family: Georgia,Times,serif
    @media (max-width: 599px)
      font-size: 1.1rem
    font-size: 1.3rem

  >h2+*
    margin-top: 0.5rem

  figure
    img
      display: block
      max-width: 100%
      height: auto
    figcaption
      padding: 1rem 1rem 0
      text-align: center
      font-size: 0.8rem
      font-weight: 600
      color: rgba(0, 0, 0, 0.5)
      a
        color: #131012
        text-decoration-color: #a9ffcb
        text-decoration-thickness: 3px
</style>
