<template>
  <v-container class="px-0 pb-9" style="min-width: 100%; max-width: 1000px">
    <h2
      class="text-h4 text-center mt-6 mb-md-4 mx-auto px-4 font-weight-medium"
      style="max-width: 600px"
    >
      Mis últimos posts con tips para emprender online
    </h2>
    <div
      style="max-width: 1000px"
      class="mx-auto d-flex flex-column flex-md-row"
    >
      <nuxt-link :to="'/blog/' + posts[0].slug">
        <v-card
          elevation="0"
          :width="$vuetify.breakpoint.xsOnly ? '' : '392'"
          class="pa-4"
          :class="$vuetify.breakpoint.smAndDown ? 'mx-auto' : ''"
        >
          <h3 class="pa-4 pb-0 text-h5 font-weight-bold">
            {{ posts[0].title }}
          </h3>
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
      </nuxt-link>
      <v-divider
        v-if="$vuetify.breakpoint.mdAndUp"
        vertical
        class="ma-2"
      ></v-divider>
      <v-divider v-else class="mx-4"></v-divider>
      <div>
        <nuxt-link :to="'/blog/' + posts[1].slug">
          <v-card
            elevation="0"
            :class="$vuetify.breakpoint.smAndDown ? 'mx-auto' : ''"
            class="pa-4 d-flex flex-column flex-sm-row"
          >
            <div :style="$vuetify.breakpoint.mdAndUp ? 'width: 60%' : ''">
              <h3 class="pa-4 pb-0 text-h5 font-weight-bold">
                {{ posts[1].title }}
              </h3>
              <v-card-subtitle
                >Por {{ posts[1].primary_author.name }}</v-card-subtitle
              >
              <v-card-text style="color: rgba(0, 0, 0, 0.6)">{{
                posts[1].excerpt
              }}</v-card-text>
            </div>
            <v-img
              cover
              class="mx-1"
              :width="$vuetify.breakpoint.xsOnly ? '' : '200'"
              height="200"
              :src="posts[1].feature_image"
            ></v-img>
          </v-card>
        </nuxt-link>
        <v-divider class="mx-4"></v-divider>
        <div class="d-flex flex-column flex-sm-row">
          <v-card
            elevation="0"
            class="pa-4"
            :style="$vuetify.breakpoint.smAndUp ? 'width: 48%' : ''"
          >
            <nuxt-link :to="'/blog/' + posts[2].slug">
              <h3
                style="color: rgba(0, 0, 0, 0.87)"
                class="pa-4 pb-0 text-h5 font-weight-bold"
              >
                {{ posts[2].title }}
              </h3>
              <v-card-text style="color: rgba(0, 0, 0, 0.6)">{{
                posts[2].excerpt
              }}</v-card-text>
            </nuxt-link>
          </v-card>
          <v-divider
            v-if="$vuetify.breakpoint.smAndUp"
            vertical
            class="ma-2"
          ></v-divider>
          <v-divider v-else class="mx-4"></v-divider>
          <v-card
            elevation="0"
            class="pa-4"
            :style="$vuetify.breakpoint.smAndUp ? 'width: 48%' : ''"
          >
            <nuxt-link :to="'/blog/' + posts[3].slug">
              <h3
                style="color: rgba(0, 0, 0, 0.87)"
                class="pa-4 pb-0 text-h5 font-weight-bold"
              >
                {{ posts[3].title }}
              </h3>
              <v-card-text style="color: rgba(0, 0, 0, 0.6)">{{
                posts[3].excerpt
              }}</v-card-text>
            </nuxt-link>
          </v-card>
        </div>
      </div>
    </div>
    <div class="d-flex justify-center">
      <v-btn to="/blog" color="secondary mt-1">Ver todo</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}

a:hover h3 {
  text-decoration: underline;
  text-decoration-color: #a9ffcb;
}
</style>
