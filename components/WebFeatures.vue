<template>
  <div class="primary">
    <v-container class="py-8" style="max-width: 900px">
      <h2 class="text-center text-h4 font-weight-medium">
        ¡Hagamos tu proyecto real!
      </h2>
      <p class="overline text-center mb-2 mb-sm-4">
        Todas las páginas incluyen:
      </p>
      <v-container>
        <v-row>
          <v-col
            class="d-flex justify-center pt-0 pt-sm-3"
            order="1"
            order-md="0"
          >
            <img
              src="@/static/ecommerce_shop.png"
              alt="Ecommerce shop"
              height="300"
            />
          </v-col>
          <v-col
            order="0"
            order-md="1"
            class="pt-0 pt-sm-3 d-flex flex-column justify-center"
          >
            <v-container
              class="d-flex flex-column flex-sm-row pt-0"
              style="max-width: 500px"
            >
              <ul class="mx-auto mx-sm-0" style="width: 230px">
                <li>Certificado SSL gratis</li>
                <li>2 meses gratis de hosting</li>
                <li>Lista de correos electrónicos</li>
                <li>SEO Optimizado</li>
              </ul>
              <ul class="mx-auto mx-sm-0" style="width: 230px">
                <li>Base de Datos</li>
                <li>CMS descabezado</li>
                <li>Boleta o Factura</li>
                <li>Google AdSense o Matomo</li>
              </ul>
            </v-container>
            <div class="d-flex justify-center mt-2 mb-4">
              <v-btn class="secondary" to="/#contact">Contacto</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
li {
  padding-bottom: 4px;
}
</style>
