<template>
  <div>
    <v-container class="py-8">
      <h3 class="text-center text-h4 font-weight-medium mb-6">Mis proyectos</h3>
      <v-hover>
        <template #default="{ hover }">
          <v-card
            :elevation="hover ? 8 : 2"
            width="300px"
            class="mx-auto text-center pb-4 transition-swing"
          >
            <img
              width="100%"
              src="@/static/apt_jmpm_art.jpg"
              alt="Foto de web MOON Inmobiliaria"
            />
            <h4 class="mt-2 text-h6">MOON Inmobiliaria</h4>
            <p class="mt-2 mb-4">
              Una plantilla que hice para negocios inmobiliarios. Con blog y
              página de proyectos con mapa.
            </p>
            <v-btn
              class="secondary"
              href="https://apt.jmpm.art/"
              target="blank"
              small
              >Visitar</v-btn
            >
          </v-card>
        </template>
      </v-hover>
      <p class="text-overline mb-0 text-center mt-6">
        Todos con diseño responsive
      </p>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
