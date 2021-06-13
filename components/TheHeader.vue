<template>
  <v-app-bar app elevate-on-scroll>
    <div
      style="width: 100vw; max-width: 900px"
      class="d-flex mx-auto align-center"
    >
      <nuxt-link to="/">
        <IsotipoNegro />
      </nuxt-link>
      <nuxt-link class="text-button mx-2 ml-6" to="/blog">Blog</nuxt-link>
      |
      <nuxt-link class="text-button mx-2" to="/">Contacto</nuxt-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
