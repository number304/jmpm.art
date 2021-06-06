<template>
  <v-container class="px-0" style="min-width: 100%; max-width: 1000px">
    <h2
      class="text-h4 text-center mt-6 mb-4 mx-auto font-weight-medium"
      style="max-width: 600px"
    >
      Mis últimos posts con tips para emprender online
    </h2>
    <div
      style="max-width: 1000px"
      class="mx-auto d-flex flex-column flex-md-row"
    >
      <client-only>
        <v-card
          elevation="0"
          :width="$vuetify.breakpoint.xsOnly ? '' : '392'"
          class="pa-4"
          :class="$vuetify.breakpoint.smAndDown ? 'mx-auto' : ''"
        >
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
        <v-divider
          v-if="$vuetify.breakpoint.mdAndUp"
          vertical
          class="ma-2"
        ></v-divider>
        <v-divider
          v-if="$vuetify.breakpoint.smAndDown"
          class="mx-4"
        ></v-divider>
        <div>
          <v-card
            elevation="0"
            :class="$vuetify.breakpoint.smAndDown ? 'mx-auto' : ''"
            class="pa-4 d-flex flex-column flex-sm-row"
          >
            <div :style="$vuetify.breakpoint.mdAndUp ? 'width: 60%' : ''">
              <h3 class="pa-4 pb-0">{{ posts[1].title }}</h3>
              <v-card-subtitle
                >Por {{ posts[1].primary_author.name }}</v-card-subtitle
              >
              <v-card-text>{{ posts[1].excerpt }}</v-card-text>
            </div>
            <v-img
              cover
              class="mx-1"
              :width="$vuetify.breakpoint.xsOnly ? '' : '200'"
              height="200"
              :src="posts[1].feature_image"
            ></v-img>
          </v-card>
          <v-divider class="mx-4"></v-divider>
          <div class="d-flex flex-column flex-sm-row">
            <v-card
              elevation="0"
              class="pa-4"
              :style="$vuetify.breakpoint.smAndUp ? 'width: 48%' : ''"
            >
              <h3 class="pa-4 pb-0">{{ posts[2].title }}</h3>
              <v-card-text>{{ posts[2].excerpt }}</v-card-text>
            </v-card>
            <v-divider
              v-if="$vuetify.breakpoint.smAndUp"
              vertical
              class="ma-2"
            ></v-divider>
            <v-divider
              v-if="$vuetify.breakpoint.xsOnly"
              class="mx-4"
            ></v-divider>
            <v-card
              elevation="0"
              class="pa-4"
              :style="$vuetify.breakpoint.smAndUp ? 'width: 48%' : ''"
            >
              <h3 class="pa-4 pb-0">{{ posts[3].title }}</h3>
              <v-card-text>{{ posts[3].excerpt }}</v-card-text>
            </v-card>
          </div>
        </div>
      </client-only>
    </div>
    <div class="d-flex justify-center">
      <v-btn color="primary mt-1">Ver todo</v-btn>
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

<style></style>
