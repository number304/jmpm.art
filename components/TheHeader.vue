<template>
  <v-app-bar app elevate-on-scroll>
    <div
      style="width: 100vw; max-width: 900px"
      class="d-flex mx-auto align-center"
    >
      <nuxt-link to="/">
        <IsotipoNegro />
      </nuxt-link>
      <nuxt-link class="text-button mx-2 ml-6" style="text-decoration: none; color: black" to="/blog">Blog</nuxt-link>
      |
      <nuxt-link class="text-button mx-2" style="text-decoration: none; color: black" to="/#contact">Contacto</nuxt-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {}
</script>
