<template>
  <v-container class="my-8">
    <h3 class="text-center text-h4 font-weight-medium mb-8">
      Con 2 planes especiales para ecommerce
    </h3>
    <div class="d-flex flex-column flex-md-row justify-center">
      <v-hover>
        <template #default="{ hover }">
          <v-card
            :elevation="hover ? 8 : 2"
            max-width="320"
            min-width="280"
            class="mx-md-2 mx-auto pa-4 transition-swing mb-8 mb-md-0"
          >
            <h4 class="text-center text-h5 font-weight-medium">Plan Brote</h4>
            <p class="text-center text-overline mb-1">
              Para los negocios emergentes
            </p>
            <ul class="pr-4 text-body-1 mb-4 mt-3">
              <li>Formulario y botón de WhatsApp</li>
              <li>Productos ilimitados</li>
            </ul>
            <p class="mt-3 mb-0 text-center text-body-2">
              Ideal para negocios que deseen usar plataformas de pago sin
              comisiones como Yape o Plin.
            </p>
            <div class="text-center mt-4 mb-1">
              <v-btn class="secondary" small to="/#contact">¡Empecemos!</v-btn>
            </div>
          </v-card>
        </template>
      </v-hover>
      <v-hover>
        <template #default="{ hover }">
          <v-card
            :elevation="hover ? 8 : 2"
            max-width="320"
            min-width="280"
            class="mx-md-2 mx-auto pa-4 transition-swing"
          >
            <h4 class="text-center text-h5 font-weight-medium">Plan Roble</h4>
            <p class="text-center text-overline mb-1">
              Establece tu empresa en la Web
            </p>
            <ul class="pr-4 text-body-1 mb-4 mt-3">
              <li>Pasarela de pago</li>
              <li>Blog</li>
            </ul>
            <p class="mt-3 mb-0 text-center text-body-2">
              Perfecto para empresas que usen una pasarela de pago para aceptar
              pagos con crédito, etc.
            </p>
            <div class="text-center mt-4 mb-1">
              <v-btn class="secondary" small to="/#contact">¡Lo quiero!</v-btn>
            </div>
          </v-card>
        </template>
      </v-hover>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style></style>
