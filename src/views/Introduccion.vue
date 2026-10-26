<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo01.mb-1.p-4.p-lg-5.p-md-5
      .row.justify-content-center.align-items-center
        .col-lg-8.mb-3
          p La creación de un recurso educativo digital adquiere verdadero sentido cuando, además de responder a una intención pedagógica, puede utilizarse de manera adecuada en diferentes contextos de formación. Para ello, resulta necesario valorar su calidad técnica y pedagógica, facilitar su acceso y conservación, y establecer condiciones que permitan su publicación, divulgación e incorporación efectiva en los procesos de enseñanza y aprendizaje.
          p En este componente se abordarán aspectos relacionados con la evaluación de los recursos educativos digitales, la usabilidad y la accesibilidad, así como la valoración de tecnologías emergentes e inmersivas, entre ellas la realidad virtual, aumentada y mixta. También se estudiarán el almacenamiento en repositorios, el uso de metadatos y las alternativas para su publicación y divulgación. Asimismo, se reconocerán estrategias de implementación didáctica que articulan metodologías activas, secuencias de aprendizaje y las características del contexto formativo.
        .col-lg-4.col-8.col-md-6
          img(src='@/assets/curso/portada/img01.png', alt='')

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .cajon.color-secundario.p-4
          p.mb-0 De esta manera, el recurso educativo digital se comprende como un elemento que debe integrarse de forma intencional al proceso formativo. Su aplicación requiere considerar las necesidades de los aprendices, las condiciones del ambiente de aprendizaje y criterios que permitan valorar sus resultados, identificar oportunidades de mejora y fortalecer su aporte al aprendizaje.




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
