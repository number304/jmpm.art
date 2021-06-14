<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="secondary text-center pa-6">
      <div class="d-flex justify-center">
        <IsotipoBlanco />
      </div>
      <p class="white--text mb-0">
        {{ new Date().getFullYear() }} —
        <strong>Jose Miguel Pedraza Mateo</strong>
      </p>
      <div>
        <nuxt-link class="text-button mx-2 ml-6" to="/blog">Blog</nuxt-link>
        <span class="primary--text"> | </span>
        <nuxt-link class="text-button mx-2" to="/">Contacto</nuxt-link>
      </div>
    </v-card>
  </v-footer>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
