<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente permitió integrar los procesos de evaluación, almacenamiento, publicación, divulgación e implementación de los recursos educativos digitales. A partir de criterios de usabilidad, accesibilidad y funcionamiento técnico, se reconocieron condiciones para evaluar herramientas digitales, incluidas las tecnologías emergentes e inmersivas, gestionar y preservar recursos mediante repositorios y metadatos, así como favorecer su disponibilidad y socialización. Asimismo, se abordó su incorporación al proceso formativo mediante metodologías activas, secuencias didácticas y la definición de criterios e indicadores que permiten valorar su aplicación, impacto y oportunidades de mejora en diferentes contextos de formación.
    

    .row.justify-content-center
      .col-lg-11.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre evaluación, divulgación e implementación de recursos educativos digitales y su impacto en la formación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
