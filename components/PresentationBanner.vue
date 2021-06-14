<template>
  <div class="primary">
    <v-container
      class="
        d-flex
        flex-column flex-sm-row
        justify-center
        align-center
        py-sm-8
        pb-9
        pt-7
      "
    >
      <client-only>
        <div style="max-width: 380px">
          <p class="overline mb-2 text-center text-sm-left">
            Desarrollador web de confianza
          </p>
          <h1 v-if="$vuetify.breakpoint.smAndUp" class="text-h3 mb-3">
            Soy Jose Miguel Pedraza Mateo
          </h1>
          <h1
            v-if="$vuetify.breakpoint.xsOnly"
            class="text-h3 text-center mb-3"
          >
            Soy Jose Miguel P. Mateo
          </h1>
          <v-avatar class="d-flex d-sm-none mx-auto my-4" size="256">
            <img src="@/static/author_pic.jpg" alt="Foto de Jose Miguel" />
          </v-avatar>
          <p class="subtitle-1 text-center text-sm-left">
            Desarrollador web peruano apasionado por la programación, la ciencia
            ficción, Javascript y próximamente Typescript.
          </p>
          <div class="text-center text-sm-left">
            <v-btn class="secondary" to="/#portfolio">Portafolio</v-btn>
          </div>
        </div>
        <v-avatar class="ml-sm-1 ml-md-4 d-none d-sm-flex" size="320">
          <img src="@/static/author_pic.jpg" alt="Foto de Jose Miguel" />
        </v-avatar>
      </client-only>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
