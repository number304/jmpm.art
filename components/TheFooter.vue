<template>
  <div>
    <SuscribeBanner />
    <v-footer padless>
      <v-card flat tile width="100%" class="secondary text-center pa-6">
        <div class="d-flex justify-center">
          <nuxt-link to="/">
            <IsotipoBlanco />
          </nuxt-link>
        </div>
        <p class="white--text mb-0">
          {{ new Date().getFullYear() }} —
          <strong>Jose Miguel Pedraza Mateo</strong>
        </p>
        <div>
          <nuxt-link class="text-button mx-2 ml-6" to="/blog">Blog</nuxt-link>
          <span class="primary--text"> | </span>
          <nuxt-link class="text-button mx-2" to="/#contact"
            >Contacto</nuxt-link
          >
        </div>
        <div class="mt-1">
          <a
            href="https://www.linkedin.com/in/jose-miguel-pedraza-mateo-n304/"
            target="_blank"
          >
            <img class="mx-2" src="@/static/linkedIn.svg" alt="Linkedin Logo" />
          </a>
          <a href="https://github.com/number304" target="_blank">
            <img class="mx-2" src="@/static/github.svg" alt="Github Logo" />
          </a>
        </div>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
