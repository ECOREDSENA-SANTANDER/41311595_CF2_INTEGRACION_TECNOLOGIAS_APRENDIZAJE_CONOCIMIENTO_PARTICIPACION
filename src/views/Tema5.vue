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
    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-9.mb-3 
        .row.justify-content-center.mb-3.bg4.g-0
          .col-lg-7
            .row.mb-0.p-4
              .col-lg-12
                p.text-white Las situaciones propuestas para la transferencia deben presentar condiciones suficientemente diferentes de las actividades iniciales, de manera que el aprendiz necesite adaptar los conocimientos adquiridos. Para ello, pueden plantearse casos con nuevas variables, problemas que admitan distintas alternativas de solución o prácticas que requieran justificar el procedimiento seleccionado.
                p.text-white.mb-0 Una actividad orientada a la transferencia requiere que el aprendiz reconozca las características de una situación, seleccione los conocimientos pertinentes y los utilice para justificar una respuesta o desarrollar una actuación. Esto permite ir más allá de la repetición de información presentada durante el proceso formativo.
          .col-lg-5.p-0
            img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t5/img12.svg', alt='')
      .col-lg-3.col-8.col-md-7
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

    .row.justify-content-center.mb-4(data-aos="flip-up")  
      .col-lg-4.col-md-6.mb-2
        .overflow-hidden.h-100.cambiartarjeta.p-2(data-aos="fade-left")
          .row.justify-content-center.mb-0
            .col-5
              figure
                img.img-a.img-t.mb-3(src='@/assets/curso/temas/t5/1.png', alt='')
          .px-3
            h4 Instructor
            p Orienta la experiencia, plantea situaciones de aplicación, acompaña el desarrollo de las actividades y ofrece retroalimentación sobre el desempeño observado.
        
      .col-lg-4.col-md-6.mb-2
        .overflow-hidden.h-100.cambiartarjeta.p-2(data-aos="fade-left")
          .row.justify-content-center.mb-0
            .col-5
              figure
                img.img-a.img-t.mb-3(src='@/assets/curso/temas/t5/1.png', alt='')
          .px-3
            h4 Aprendiz
            p Analiza las situaciones propuestas, utiliza los conocimientos adquiridos, desarrolla las evidencias y reflexiona sobre los resultados de sus decisiones.

      .col-lg-4.col-md-6.mb-2
        .overflow-hidden.h-100.cambiartarjeta.p-2(data-aos="fade-left")
          .row.justify-content-center.mb-0
            .col-5
              figure
                img.img-a.img-t.mb-3(src='@/assets/curso/temas/t5/1.png', alt='')
          .px-3
            h4 Equipo de formación
            p Cuando la actividad lo requiere, contribuye a coordinar recursos, resolver necesidades de apoyo y compartir observaciones que permitan mejorar la implementación.
         
    p La articulación de estas responsabilidades facilita el desarrollo de experiencias en las que la tecnología cumple una función pedagógica. Además, permite reconocer que la transferencia del conocimiento depende tanto de las oportunidades de aplicación como de las condiciones de acompañamiento y participación.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Valoración del impacto pedagógico

    .row.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-7.mb-3
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t5/img02.svg")
          .col-lg-10
            p La propuesta debe contemplar indicadores y evidencias que permitan valorar si el recurso contribuyó al aprendizaje y a la solución de la necesidad identificada. La valoración puede considerar el desempeño, la apropiación del conocimiento, la transferencia, la usabilidad, la satisfacción y las oportunidades de mejora.
        p La valoración del impacto pedagógico consiste en analizar los resultados obtenidos durante la implementación y establecer en qué medida responden a los propósitos formativos definidos. Para desarrollar este análisis, es necesario contar con criterios claros, evidencias verificables e instrumentos de seguimiento apropiados.
        p Un aspecto fundamental es distinguir entre los datos de utilización del recurso y las evidencias de aprendizaje. La cantidad de accesos, el tiempo de navegación o la frecuencia de participación pueden informar sobre las condiciones de uso, pero no permiten demostrar, por sí solos, que los aprendices hayan desarrollado las competencias previstas.
      .col-lg-5.p-0.col-10.col-md-8.mb-3
        img(src="@/assets/curso/temas/t5/img12.png")
    p Por esta razón, la valoración debe incluir evidencias relacionadas con los desempeños esperados, como la resolución de casos, la aplicación de procedimientos, la elaboración de productos o la explicación fundamentada de decisiones.

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
      .col-lg-9.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 4.
          span Indicadores y evidencias para valorar la implementación de recursos educativos digitales

        .tabla-a.color-acento-contenido.mb-0
          table(style="table-layout: fixed; width:100%;")
            thead
              tr
                th.bg3.text-izq.w-25 Aspecto de valoración
                th.bg3.text-izq Indicador orientativo
                th.bg3.text-izq Evidencia o instrumento
            tbody
              tr
                td.text-izq Logro del aprendizaje
                td.text-izq Nivel de cumplimiento de los criterios establecidos para la actividad.
                td.text-izq Rúbrica o lista de chequeo aplicada al producto o desempeño.
              tr
                td.text-izq Aplicación del conocimiento
                td.text-izq Capacidad para utilizar lo aprendido en una situación diferente.
                td.text-izq Resolución de un caso o desarrollo de una actividad práctica.
              tr
                td.text-izq Participación
                td.text-izq Cumplimiento de las actividades y formas de interacción previstas.
                td.text-izq Registro de participación y seguimiento de actividades.
              tr
                td.text-izq Usabilidad en contexto
                td.text-izq Dificultades encontradas durante la utilización del recurso.
                td.text-izq Observación de la actividad y registro de incidencias.
              tr
                td.text-izq Percepción de los aprendices
                td.text-izq Valoración de la claridad, utilidad y facilidad de uso del recurso.
                td.text-izq Encuesta breve o preguntas de retroalimentación.
              tr
                td.text-izq Mejoramiento del recurso
                td.text-izq Ajustes identificados a partir de los resultados obtenidos.
                td.text-izq Informe de hallazgos y plan de mejora.
      .col-lg-3.p-3.col-8.col-md-5
        img(src='@/assets/curso/temas/t5/img13.png', alt='')
    p Los indicadores deben formularse de manera que permitan observar o medir los resultados esperados. Para ello, es necesario establecer criterios claros y, cuando corresponda, niveles de desempeño que faciliten interpretar las evidencias obtenidas. Estos criterios deben guardar relación con los resultados de aprendizaje y comunicarse oportunamente a los participantes.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Interpretación de resultados y evidencias

    .row.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-3.mb-3.p-2.col-8.col-md-7
        img(src="@/assets/curso/temas/t5/img14.png")
      .col-lg-9 
        .row.justify-content-center.mb-3.bg4.g-0
          .col-lg-7
            .row.mb-0.p-4
              .col-lg-12
                p.text-white La recopilación de información representa una etapa inicial de la valoración. Para convertir los datos en información útil, es necesario analizarlos en relación con los objetivos establecidos y las condiciones bajo las cuales se desarrolló la actividad.
                p.text-white.mb-0 Por ejemplo, si varios aprendices presentan dificultades para completar una práctica digital, el instructor debe examinar si estas se relacionan con la comprensión de los contenidos, la claridad de las instrucciones, el funcionamiento del recurso o las condiciones de acceso. Esta distinción evita atribuir automáticamente los resultados a una sola causa.
          .col-lg-5.p-0
            img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t5/img15.svg', alt='')
    p Cuando se dispone de evidencias iniciales y finales, su comparación puede aportar información sobre los avances observados. Sin embargo, los cambios en el desempeño no deben atribuirse exclusivamente al recurso digital, ya que también intervienen el acompañamiento del instructor, los conocimientos previos y otras condiciones del proceso formativo.

    .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
      p.mb-0 La interpretación de resultados permite fundamentar decisiones relacionadas con la continuidad, modificación o sustitución de una herramienta. También contribuye a identificar prácticas que pueden aprovecharse en nuevas experiencias educativas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Decisiones a partir de los resultados de evaluación

    .row.mb-4.text-white.justify-content-center(data-aos="zoom-in-left")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          h4.text-center Mantener
          p.mb-0.text-center Conservar las características del recurso que demostraron ser pertinentes para la actividad y facilitaron el desarrollo de los aprendizajes previstos.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          h4.text-center Ajustar
          p.mb-0.text-center Modificar instrucciones, actividades o elementos de interacción cuando se identifiquen dificultades que puedan resolverse mediante mejoras específicas.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          h4.text-center Complementar
          p.mb-0.text-center Incorporar orientaciones, materiales de apoyo o alternativas de participación cuando el recurso resulte insuficiente para determinadas necesidades formativas.

    .row.text-white.justify-content-center.mb-4
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          h4.text-center Sustituir
          p.mb-0.text-center Seleccionar otra herramienta cuando las limitaciones pedagógicas, técnicas o de accesibilidad impidan cumplir el propósito de la actividad.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100
          h4.text-center Documentar
          p.mb-0.text-center Registrar las decisiones adoptadas, los cambios realizados y los resultados obtenidos para orientar nuevas implementaciones.

    p La planificación de la implementación debe mantener una relación coherente entre las decisiones pedagógicas, las condiciones del ambiente de formación y los mecanismos de seguimiento. La siguiente infografía presenta una ruta que facilita la organización de este proceso.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Ruta de la propuesta de implementación didáctica

    p De la caracterización del contexto a la evaluación del impacto.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t5/img16.svg', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Mejoramiento continuo de los recursos educativos digitales

    .bloque-texto-g.bg4.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La valoración de una experiencia formativa debe conducir a decisiones que permitan mantener la pertinencia y calidad del recurso. Para ello, los resultados del seguimiento pueden utilizarse como fundamento para establecer acciones de mejora relacionadas con las dificultades y necesidades identificadas.
          br
          br
          | Para priorizar las mejoras, conviene considerar la gravedad de los hallazgos, su efecto sobre el aprendizaje y los recursos disponibles para atenderlos. Esta valoración permite establecer cuáles situaciones requieren intervención inmediata y cuáles pueden incorporarse a una programación posterior de ajustes.

    .row.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-7.mb-3
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t5/img18.svg")
          .col-lg-10
            p Cuando se realizan modificaciones, es importante comprobar que los cambios no afecten otras funciones del material y que continúen respondiendo al propósito pedagógico. También conviene mantener un registro de las versiones y de las decisiones adoptadas, de manera que las mejoras puedan reconocerse y recuperarse durante nuevas implementaciones.
        p La información derivada de la evaluación puede compartirse con otros integrantes del equipo de formación para fortalecer las prácticas institucionales. Las experiencias documentadas permiten identificar dificultades recurrentes, reconocer alternativas efectivas y orientar la utilización de recursos digitales en contextos semejantes.
      .col-lg-5.p-0.col-10.col-md-8.mb-3
        img(src="@/assets/curso/temas/t5/img17.png")
      p El mejoramiento continuo contribuye a que los recursos educativos digitales mantengan su utilidad frente a cambios en las necesidades de los aprendices, los ambientes de formación y las posibilidades tecnológicas. 

    .row.justify-content-start.mb-0(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Diseño y evaluación de una experiencia piloto

    .fondo04.mb-0.p-4.p-lg-5(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-8.mb-3
          p Antes de extender el uso de un recurso a varios grupos, puede realizarse una experiencia piloto con participantes representativos del contexto de formación. Su finalidad es comprobar, en condiciones controladas, si las actividades son comprensibles, si los tiempos previstos son realistas y si los instrumentos de seguimiento permiten recoger evidencias útiles. Una prueba piloto no sustituye la evaluación posterior, pero reduce la posibilidad de replicar dificultades que pudieron detectarse anticipadamente.
          p El diseño de la experiencia comienza con una pregunta concreta. Por ejemplo: ¿el uso de una simulación facilita que los aprendices identifiquen riesgos y justifiquen medidas de prevención en un escenario nuevo? La pregunta ayuda a delimitar qué se observará y qué evidencias se necesitan. También permite evitar mediciones que no guardan relación con la finalidad del recurso, como contabilizar únicamente el número de accesos.
          .cajon.color-secundario.p-4.mb-4
            p.mb-0 Después se define la actividad inicial que mostrará los conocimientos o desempeños de partida. Puede consistir en resolver un caso breve, reconocer errores en una situación o explicar un procedimiento. A continuación se implementa el recurso con orientaciones claras y acompañamiento pedagógico. Finalmente, se propone una tarea comparable, pero no idéntica, para reconocer si el aprendiz aplica los conocimientos en una situación distinta.
        .col-lg-4.col-9.col-md-6
          img(src="@/assets/curso/temas/t5/img18.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Caso aplicado: simulación de identificación de riesgos en un taller

    p Un instructor de formación técnica dispone de una simulación que presenta diversas condiciones de seguridad en un taller. El objetivo es que los aprendices reconozcan situaciones peligrosas, justifiquen su análisis y propongan medidas preventivas pertinentes. El grupo cuenta con computadores compartidos y dispone de una sesión para explorar el recurso, seguida de una actividad de aplicación.

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.mb-3.p-0.col-10.col-md-8
        img(src="@/assets/curso/temas/t5/img19.png")
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t4/img10.svg")
          .col-lg-10
            p En la preparación se comprueba la compatibilidad de la simulación con los equipos del ambiente. El instructor verifica que los textos sean legibles, que las instrucciones permitan comprender la navegación y que la actividad pueda desarrollarse sin el uso obligatorio de dispositivos especializados. También prepara un conjunto de imágenes y descripciones como alternativa si se presenta una interrupción técnica.
        p La actividad comienza con la revisión de un caso ilustrado en el que cada aprendiz identifica dos riesgos y explica su relevancia. Durante el desarrollo, los participantes trabajan con la simulación y comparan las consecuencias de distintas decisiones de prevención. El instructor observa la interacción, atiende las dudas y registra los aspectos que podrían requerir mejora. Al finalizar, se presenta un segundo caso con condiciones diferentes, en el que los aprendices deben argumentar qué medidas aplicarían y por qué.
      
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Seguimiento de una experiencia piloto

    LineaTiempoE.color-primario.mb-4(data-aos="zoom-in-left")
      .row.align-items-center(titulo="Momento 1" subtitulo="")
        .col-lg-3.col-md-4.col-7.mb-3
          figure
            img(src='@/assets/curso/temas/t5/1.svg', alt='')
        .col-lg-9.col-md-8.col-12
          h4 Preparación
          p Formular el propósito, seleccionar participantes, comprobar el acceso y acordar los criterios de observación.

      .row.align-items-center(titulo="Momento 2" subtitulo="")
        .col-lg-3.col-md-4.col-7.mb-3
          figure
            img(src='@/assets/curso/temas/t5/2.svg', alt='')
        .col-lg-9.col-md-8.col-12
          h4 Evidencia inicial
          p Plantear una situación que permita reconocer los conocimientos o desempeños previos.

      .row.align-items-center(titulo="Momento 3" subtitulo="")
        .col-lg-3.col-md-4.col-7.mb-3
          figure
            img(src='@/assets/curso/temas/t5/3.svg', alt='')
        .col-lg-9.col-md-8.col-12
          h4 Implementación
          p Desarrollar la actividad digital y registrar dificultades de comprensión, interacción o funcionamiento.

      .row.align-items-center(titulo="Momento 4" subtitulo="")
        .col-lg-3.col-md-4.col-7.mb-3
          figure
            img(src='@/assets/curso/temas/t5/4.svg', alt='')
        .col-lg-9.col-md-8.col-12
          h4 Evidencia final
          p Presentar un caso comparable con nuevas condiciones para valorar la aplicación de lo aprendido.

      .row.align-items-center(titulo="Momento 5" subtitulo="")
        .col-lg-3.col-md-4.col-7.mb-3
          figure
            img(src='@/assets/curso/temas/t5/5.svg', alt='')
        .col-lg-9.col-md-8.col-12
          h4 Análisis y mejora
          p Contrastar hallazgos, identificar limitaciones y documentar las acciones necesarias antes de ampliar la experiencia.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Interpretación de los hallazgos del piloto

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12.mb-3
        img(src='@/assets/curso/temas/t5/img20.png', alt='')
    p El análisis debe considerar evidencias diversas. Un buen desempeño en la actividad final puede indicar avances, pero no demuestra automáticamente que el recurso sea la única causa del resultado. Las orientaciones del instructor, el trabajo colaborativo y los conocimientos previos también pueden influir. Por ello, conviene describir de manera transparente el contexto y las condiciones bajo las cuales se obtuvieron las evidencias.
    p Si los aprendices logran identificar riesgos, pero presentan dificultades para justificar las medidas de prevención, el instructor puede concluir que es necesario fortalecer la argumentación mediante nuevos casos o preguntas de retroalimentación. Si el problema principal es la navegación, se requieren ajustes técnicos o de usabilidad. Distinguir estas situaciones permite adoptar mejoras pertinentes y evita modificar contenidos que ya cumplen su función.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Informe de implementación y recomendaciones


    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      
      .col-lg-7.mb-3(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t5/img22.svg")
          .col-lg-10
            p El cierre de la experiencia debe traducirse en un informe breve que registre el propósito, la población participante, el ambiente, el recurso empleado, las actividades realizadas y las evidencias analizadas. Debe incluir tanto los resultados favorables como las dificultades identificadas, acompañados de decisiones verificables para la siguiente utilización del material.
        p Las recomendaciones se benefician de un criterio de prioridad. Los problemas que impiden el acceso o comprometen la participación requieren atención antes de repetir la actividad. Los ajustes de claridad, presentación o ejemplos pueden programarse según su influencia en la comprensión. Cuando se identifica la necesidad de incorporar nuevas funciones, debe analizarse si realmente apoyan los resultados de aprendizaje y si su implementación es viable.
      .col-lg-5.p-0.col-10.col-md-8.d-none.d-lg-block
        img(src="@/assets/curso/temas/t5/img21.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Sostenibilidad de una experiencia educativa digital

    .row.justify-content-center.mb-0.align-items-center(data-aos="zoom-in-left")
      .col-lg-3.mb-3.p-4.col-10.col-md-7
        img(src="@/assets/curso/temas/t5/img23.png")
      .col-lg-9 
        .row.justify-content-center.mb-3.bg4.g-0
          .col-lg-7
            .row.mb-0.p-4
              .col-lg-12
                p.text-white.mb-0 El seguimiento también debe contemplar si el recurso puede mantenerse durante varias cohortes de formación. Esto supone revisar la disponibilidad de licencias, los requisitos técnicos, la capacidad institucional para atender incidencias y el esfuerzo necesario para actualizar contenidos. Una herramienta que ofrece numerosas funciones puede resultar poco sostenible si depende de servicios externos costosos o de equipos inaccesibles para la población.
          .col-lg-5.p-0
            img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t5/img25.svg', alt='')

    p La sostenibilidad no implica conservar indefinidamente una misma solución. Consiste en disponer de criterios para continuar, actualizar o reemplazar los recursos cuando cambian las necesidades educativas y tecnológicas. La documentación de experiencias piloto y la revisión periódica de evidencias permiten tomar estas decisiones con fundamentos, fortaleciendo la calidad de la formación sin depender de novedades tecnológicas pasajeras.

    .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
      p.mb-0 En consecuencia, la transferencia del conocimiento y la valoración del impacto permiten cerrar el proceso de implementación mediante evidencias que fundamentan decisiones pedagógicas y técnicas. De esta manera, la selección y utilización de herramientas digitales se orientan al desarrollo de aprendizajes pertinentes y a la mejora de las experiencias formativas.





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
