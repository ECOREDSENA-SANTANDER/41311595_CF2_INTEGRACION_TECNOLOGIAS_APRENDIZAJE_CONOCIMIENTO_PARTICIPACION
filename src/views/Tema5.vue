<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Transferencia del conocimiento e impacto en contexto

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La transferencia permite aplicar lo aprendido en situaciones reales o simuladas del entorno social o productivo. La implementación debe considerar las condiciones del ambiente de formación, la infraestructura tecnológica, los roles del instructor y del aprendiz y la forma en que el recurso actuará como mediador.
          br
          br
          | La incorporación de recursos educativos digitales a los procesos formativos requiere articular las decisiones pedagógicas con las condiciones del contexto de aplicación. Un recurso puede presentar características técnicas apropiadas y contenidos pertinentes, pero su contribución al aprendizaje dependerá también de la manera en que se utilice, del acompañamiento ofrecido y de las oportunidades que tengan los aprendices para aplicar sus conocimientos.

    .row.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-7.mb-3
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t5/img02.svg")
          .col-lg-10
            p La transferencia del conocimiento se relaciona con la capacidad de utilizar los aprendizajes adquiridos para interpretar situaciones, resolver problemas, tomar decisiones y desarrollar procedimientos en escenarios diferentes de aquellos en los que se produjo el aprendizaje inicial. Por ello, la implementación debe contemplar actividades que permitan establecer relaciones entre los contenidos estudiados y las necesidades de los entornos sociales o productivos.
        p En este proceso, los recursos digitales pueden facilitar la representación de situaciones complejas, el análisis de información, la experimentación mediante simulaciones y la práctica de procedimientos. Sin embargo, su utilización debe estar acompañada de actividades que permitan comprobar cómo se aplican los conocimientos y qué resultados se obtienen.
      .col-lg-5.p-0.col-10.col-md-8
        img(src="@/assets/curso/temas/t5/img03.png")
     
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Aplicación práctica del recurso educativo digital
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        img(src='@/assets/curso/temas/t5/img04.png', alt='')
    p Para una aplicación efectiva, se deben definir la modalidad, el entorno, la población, las necesidades, la infraestructura y los recursos requeridos. El recurso debe integrarse a actividades con propósito y contribuir al desarrollo de los resultados de aprendizaje.
    p.mb-4 La aplicación práctica comienza con el reconocimiento de las características del ambiente de formación. Esta caracterización permite establecer si las condiciones previstas para utilizar el recurso corresponden con las posibilidades tecnológicas, pedagógicas y organizativas de la institución y de los aprendices.

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
      .col-lg-9.mb-3
        .row.justify-content-center.mb-3.bg4.g-0
          .col-lg-7
            .row.mb-0.p-4
              .col-lg-12
                p.text-white.mb-0 La información recopilada durante la caracterización debe analizarse para determinar qué condiciones requieren ajustes antes de iniciar la actividad. De esta manera, el instructor puede establecer prioridades, reconocer posibles barreras y tomar decisiones acordes con las posibilidades reales del ambiente de formación.
          .col-lg-5.p-0
            img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t5/img05.svg', alt='')
        p La caracterización no implica únicamente realizar un inventario de recursos tecnológicos. Su finalidad es reconocer cómo las condiciones del contexto pueden influir en el desarrollo de las actividades y en las posibilidades de alcanzar los resultados de aprendizaje previstos.
      .col-lg-3.col-7.col-md-5
        img(src="@/assets/curso/temas/t5/img06.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Condiciones para implementar recursos digitales en formación

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
      .col-lg-3.mb-3.col-9.col-md-6.p-0
        img(src='@/assets/curso/temas/t5/img07.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones.mb-2
          .tarjeta.color-acento-botones--borde.p-4(titulo="Características de la población")
            p Reconocer los conocimientos previos, las necesidades de apoyo y las posibilidades de acceso de los aprendices para ajustar las condiciones de participación.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Infraestructura tecnológica")
            p Verificar la disponibilidad de equipos, conectividad, aplicaciones y dispositivos necesarios para utilizar el recurso durante la actividad.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Organización del ambiente")
            p Disponer los espacios, tiempos y materiales de apoyo requeridos, considerando la modalidad y las condiciones específicas de la formación.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Acompañamiento pedagógico")
            p Definir cómo el instructor orientará la actividad, atenderá las dificultades y ofrecerá retroalimentación durante la utilización del recurso.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Alternativas de participación")
            p.mb-0 Prever opciones para desarrollar la actividad cuando existan limitaciones de acceso, dificultades técnicas o necesidades específicas de los aprendices.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Preparación y seguimiento de la implementación

    .bloque-texto-g.bloque-texto-g--inverso.bg4.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img08.png')})`}"
        )
        .bloque-texto-g__texto.p-3
          p.mb-0 Antes de utilizar el recurso, el instructor debe comprobar que las condiciones de acceso y funcionamiento sean adecuadas para el ambiente de formación. Esta verificación puede realizarse mediante una prueba que reproduzca las condiciones previstas para la actividad, incluyendo el dispositivo, el navegador o la aplicación y el tipo de conectividad disponible.
            br
            br
            | También resulta necesario preparar orientaciones que indiquen a los aprendices el propósito de la actividad, las acciones que deben realizar y las evidencias que se espera obtener. Estas instrucciones deben ser comprensibles y encontrarse disponibles en el momento oportuno para facilitar el desarrollo autónomo o acompañado de las tareas.

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.mb-3.p-0.col-10.col-md-8
        img(src="@/assets/curso/temas/t5/img09.png")
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t5/img10.svg")
          .col-lg-10
            p Durante la implementación, el seguimiento permite identificar situaciones que requieren atención, como dificultades para comprender una instrucción, interrupciones tecnológicas o necesidades de apoyo adicional. El instructor puede registrar estas observaciones para introducir ajustes y mejorar las condiciones de futuras experiencias.
          p El seguimiento no debe limitarse a comprobar si los aprendices ingresaron al recurso. También es necesario observar cómo desarrollan las actividades, qué dificultades enfrentan y de qué manera relacionan los contenidos con las tareas propuestas.
      
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Transferencia del aprendizaje a situaciones reales o simuladas
    .row.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-9.mb-3 
        .row.justify-content-center.mb-3.bg4.g-0
          .col-lg-7
            .row.mb-0.p-4
              .col-lg-12
                p.text-white Las situaciones propuestas para la transferencia deben presentar condiciones suficientemente diferentes de las actividades iniciales, de manera que el aprendiz necesite adaptar los conocimientos adquiridos. Para ello, pueden plantearse casos con nuevas variables, problemas que admitan distintas alternativas de solución o prácticas que requieran justificar el procedimiento seleccionado.
                p.text-white.mb-0 Una actividad orientada a la transferencia requiere que el aprendiz reconozca las características de una situación, seleccione los conocimientos pertinentes y los utilice para justificar una respuesta o desarrollar una actuación. Esto permite ir más allá de la repetición de información presentada durante el proceso formativo.
          .col-lg-5.p-0
            img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t5/img12.svg', alt='')
      .col-lg-3
        img(src="@/assets/curso/temas/t5/img11.png")

    p Por ejemplo, en una formación relacionada con el mantenimiento de equipos, una simulación digital puede facilitar el reconocimiento de fallas y la exploración de procedimientos. Posteriormente, el instructor puede presentar una situación diferente en la que el aprendiz deba analizar síntomas, identificar posibles causas y justificar una propuesta de intervención.
    p En este caso, la evidencia de transferencia no consiste solamente en completar la simulación, sino en demostrar que los principios aprendidos pueden utilizarse para analizar una nueva situación.

    .cajon.color-secundario.p-4.mb-4
      p.mb-0 La complejidad de las actividades debe guardar relación con el nivel de formación, las características de la población y los resultados de aprendizaje. Cuando sea necesario, pueden establecerse apoyos progresivos que permitan avanzar desde ejercicios orientados hasta situaciones que demanden mayor autonomía.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Participantes en la transferencia del conocimiento








































































</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
