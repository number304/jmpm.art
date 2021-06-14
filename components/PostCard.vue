<template>
  <v-card
    elevation="0"
    class="px-2"
    :class="$vuetify.breakpoint.mdAndUp && index === 0 ? 'd-flex' : ''"
  >
    <v-img :aspect-ratio="3 / 2" :src="post.feature_image"></v-img>
    <div
      :style="
        $vuetify.breakpoint.mdAndUp && index === 0 ? 'max-width: 34.6%' : ''
      "
      :class="
        index === 0 ? 'px-md-8 d-md-flex flex-md-column justify-md-center' : ''
      "
    >
      <h2
        :class="index === 0 ? 'text-md-h4' : ''"
        class="mt-4 mb-3 text-h5 font-weight-bold"
      >
        {{ post.title }}
      </h2>
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
    index: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    formatDate,
  },
}
</script>

<style scoped>
h2 {
  line-height: 1.15;
}
</style>
