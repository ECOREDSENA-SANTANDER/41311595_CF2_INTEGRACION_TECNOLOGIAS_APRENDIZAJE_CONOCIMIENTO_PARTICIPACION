<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Publicación y divulgación de recursos educativos digitales

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La utilidad de un recurso educativo digital no depende únicamente de su calidad técnica y pedagógica. También es necesario que pueda ponerse a disposición de sus usuarios en condiciones adecuadas de acceso, organización y visibilidad, de manera que su consulta y aprovechamiento resulten viables dentro de los procesos formativos.
          br
          br
          | En esta etapa se distinguen dos procesos complementarios: la publicación, mediante la cual el recurso se incorpora a un entorno de consulta, y la divulgación, orientada a comunicar su existencia y utilidad a una audiencia determinada. Ambos requieren planificación para asegurar que el material llegue a sus destinatarios en condiciones apropiadas. 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Alojamiento y publicación en plataformas educativas

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.mb-3.p-0.col-10.col-md-8
        img(src="@/assets/curso/temas/t3/img02.png")
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t3/img03.svg")
          .col-lg-10
            p La publicación consiste en disponer el recurso en un entorno desde el cual pueda ser consultado por los usuarios previstos. Para ello, es necesario seleccionar un espacio adecuado según la finalidad del material, las condiciones del contexto formativo y el nivel de acceso que se desea ofrecer.
        p Los recursos educativos digitales pueden publicarse en plataformas educativas, repositorios institucionales, bibliotecas digitales, sitios web o espacios de almacenamiento con acceso compartido. La elección del canal depende de factores como el tipo de recurso, la población a la que se dirige, la conectividad disponible y la necesidad de actualización o seguimiento.
      p Antes de publicar un recurso, se deben revisar aspectos como el funcionamiento de enlaces, la correcta visualización de archivos, la organización de los materiales complementarios y la configuración de permisos de acceso. También conviene verificar que el recurso conserve su integridad y que los usuarios puedan identificar con claridad su propósito, instrucciones de uso y condiciones de consulta.

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-9.mb-3 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3.
          span Opciones para la publicación de recursos educativos digitales

        .tabla-a.color-acento-contenido.mb-0
          table(style="table-layout: fixed; width:100%;")
            thead
              tr
                th.bg3.text-izq Canal de publicación
                th.bg3.text-izq Finalidad principal
                th.bg3.text-izq Aplicación en la formación
            tbody
              tr
                td.text-izq Plataforma educativa
                td.text-izq Integrar recursos a un curso o ambiente virtual.
                td.text-izq Disponer materiales, actividades y orientaciones para un grupo de aprendices.
              tr
                td.text-izq Repositorio institucional
                td.text-izq Preservar y poner a disposición recursos validados.
                td.text-izq Consultar y reutilizar materiales producidos por la institución o por sus equipos de formación.
              tr
                td.text-izq Biblioteca digital
                td.text-izq Facilitar la consulta organizada de colecciones.
                td.text-izq Acceder a documentos, recursos de apoyo y materiales de referencia.
              tr
                td.text-izq Sitio web o blog educativo
                td.text-izq Divulgar contenidos a una audiencia más amplia.
                td.text-izq Compartir recursos, orientaciones o experiencias formativas.
              tr
                td.text-izq Carpeta compartida con permisos definidos
                td.text-izq Facilitar el acceso controlado a archivos específicos.
                td.text-izq Entregar materiales de apoyo o versiones de trabajo a usuarios autorizados.
      .col-lg-3.p-0.col-8.col-md-5
        img(src='@/assets/curso/temas/t3/img04.png', alt='')

    p La publicación adecuada mejora la disponibilidad de los recursos y favorece su uso oportuno. Sin embargo, un recurso publicado no necesariamente será consultado o aprovechado si no existen acciones de comunicación que orienten a los usuarios sobre su existencia, utilidad y forma de acceso.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Comunicación digital y divulgación colaborativa
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-3.mb-3.p-0.col-7.col-md-5
        img(src="@/assets/curso/temas/t3/img05.png")
      .col-lg-9
        .row.justify-content-center.mb-3.bg4.g-0
          .col-lg-7
            .row.mb-0.p-4
              .col-lg-12
                p.text-white La divulgación consiste en dar a conocer el recurso a la comunidad prevista, explicando su propósito, sus posibilidades de uso y la manera de acceder a él. En el ámbito educativo, esta acción puede desarrollarse mediante anuncios en plataformas, mensajes institucionales, espacios de socialización, redes académicas o comunidades de práctica.
                p.text-white.mb-0 Una divulgación efectiva requiere definir con claridad a quién se dirige el mensaje, qué información se comunicará y por qué medio se realizará. No se trata únicamente de compartir un enlace, sino de contextualizar el recurso, indicar su utilidad y orientar a los usuarios para que puedan incorporarlo de manera pertinente a sus actividades de aprendizaje.
          .col-lg-5.p-0
            img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t3/img06.svg', alt='')
        p La comunicación digital también exige cuidar el lenguaje, la claridad del mensaje y el respeto por las normas de interacción en línea. En este proceso, resulta importante utilizar descripciones comprensibles, evitar la saturación de información y ofrecer instrucciones concretas para facilitar el acceso y la consulta del recurso.

    p Cuando la divulgación se realiza en espacios colaborativos, es conveniente promover prácticas de comunicación respetuosa y responsable. Esto incluye reconocer la autoría, atender las inquietudes de los usuarios, orientar el uso del recurso y recoger observaciones que permitan fortalecerlo o actualizarlo en futuras versiones.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Acciones para divulgar un recurso educativo digital

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-3.mb-3.col-9.col-md-6
        img(src='@/assets/curso/temas/t3/img07.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones.mb-4 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Definir la audiencia")
            p Identificar a quién está dirigido el recurso, cuáles son sus necesidades y qué información requiere para comprender su utilidad dentro del proceso formativo.
       
          .tarjeta.color-acento-botones--borde.p-4(titulo="Seleccionar el canal")
            p Elegir el medio de divulgación más adecuado según el contexto, como plataforma educativa, repositorio institucional, sitio web, correo institucional o comunidad académica.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Preparar el mensaje")
            p Redactar una comunicación breve y clara que indique el propósito del recurso, la forma de acceso, las orientaciones de uso y los beneficios esperados para los usuarios.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Acompañar la socialización")
            p Resolver inquietudes, recoger observaciones y valorar la respuesta de los usuarios para identificar oportunidades de mejora o actualización del recurso.

    p La publicación y la divulgación no deben entenderse como acciones aisladas. Forman parte de una secuencia que comienza con la evaluación del recurso, continúa con su organización y preservación y culmina con su puesta a disposición de la comunidad educativa.
    p Por esta razón, la relación entre evaluar, almacenar y divulgar puede sintetizarse en la siguiente infografía, que integra las etapas clave para asegurar la calidad, disponibilidad y alcance del recurso educativo digital.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Ciclo final del recurso educativo digital
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src="@/assets/curso/temas/t3/img08.svg")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Pruebas de publicación y seguimiento del acceso

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src="@/assets/curso/temas/t3/img09.png")
    p Después de configurar la publicación, resulta conveniente realizar una prueba desde la perspectiva de los usuarios previstos. Esta prueba permite reconocer situaciones que no siempre son visibles para el responsable del material, como solicitudes de permisos, mensajes de error, archivos que no se cargan o enlaces disponibles únicamente desde una cuenta de administración. Se trata de una comprobación del servicio de acceso, distinta de la evaluación pedagógica realizada durante la elaboración del recurso.

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.mb-3.p-0.col-10.col-md-8
        img(src="@/assets/curso/temas/t3/img10.png")
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t3/img11.svg")
          .col-lg-10
            p La prueba debe considerar el recorrido completo que realizará el aprendiz: recibir la invitación o instrucción, abrir el enlace, identificar el recurso, comprender cómo iniciar la actividad y acceder a los materiales complementarios. Cuando sea posible, la revisión debe realizarse desde un perfil de estudiante y no desde la cuenta del instructor, porque los permisos y las vistas pueden ser diferentes.
        p En recursos con varios archivos, es importante verificar que los nombres sean claros y que las orientaciones permitan reconocer qué material se utiliza primero. Si existen condiciones de tiempo, ventanas de disponibilidad o restricciones de descarga, estas deben comunicarse antes de la actividad. También se debe comprobar que las funciones esenciales sean utilizables en los dispositivos previstos y que exista una alternativa cuando se presente una dificultad de acceso.
      
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Comprobaciones previas a divulgar un recurso

    .row.mb-4.text-white.justify-content-center(data-aos="zoom-in-left")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          h4.text-center Acceso como aprendiz
          p.mb-0.text-center Abrir el recurso desde una cuenta o perfil de prueba con los permisos que tendrá el grupo.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          h4.text-center Recorrido de navegación
          p.mb-0.text-center Confirmar que las orientaciones, botones y archivos asociados conduzcan a los contenidos esperados.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          h4.text-center Condiciones de disponibilidad
          p.mb-0.text-center Revisar horarios, restricciones, compatibilidad y posibles limitaciones de conectividad.
    .row.text-white.justify-content-center.mb-4
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          h4.text-center Información de contacto
          p.mb-0.text-center Indicar el canal autorizado mediante el cual se recibirán consultas o reportes de fallas.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          h4.text-center Registro de incidencias
          p.mb-0.text-center Anotar los problemas encontrados y comprobar su solución antes de comunicar el acceso definitivo.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Seguimiento de la divulgación y respuesta de la comunidad

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.mb-3.p-0.col-10.col-md-8
        img(src="@/assets/curso/temas/t3/img11.png")
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t3/img12.svg")
          .col-lg-10
            p La divulgación puede valorarse a partir de indicadores que permitan reconocer si el mensaje llegó a su audiencia y si los usuarios pudieron acceder al material. La consulta de un enlace, la respuesta a una comunicación o la recepción de preguntas aportan información sobre el alcance de la estrategia. Sin embargo, estos datos no equivalen a evidencias de aprendizaje y deben interpretarse como señales sobre la circulación y accesibilidad del recurso.
        p El análisis también puede identificar barreras comunicativas. Si los destinatarios no comprenden la utilidad de un material, podría ser necesario ajustar la descripción del recurso. Si se presentan numerosas solicitudes de acceso, probablemente deban revisarse los permisos. Si los participantes manifiestan dificultades para encontrar orientaciones, conviene reorganizar el mensaje de presentación o mejorar las instrucciones iniciales.
      p En comunidades académicas, la divulgación puede generar observaciones útiles para futuras versiones. Para aprovecharlas, es recomendable disponer de una forma sencilla de recoger comentarios y clasificarlos por tema: funcionamiento, pertinencia, facilidad de uso o necesidades de actualización. Este mecanismo permite distinguir sugerencias de mejora de problemas que exigen atención inmediata.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Caso de divulgación de una guía interactiva

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src="@/assets/curso/temas/t3/img12.png")
    p Un equipo de instructores publica una guía digital sobre buenas prácticas ambientales en una plataforma institucional. El mensaje inicial identifica la población destinataria, indica el propósito del material y señala cómo ingresar. Antes de realizar el anuncio general, el equipo comprueba el acceso mediante una cuenta de aprendiz y detecta que un archivo complementario solicita autorización. El problema se corrige antes de la publicación definitiva.
    p Durante la primera semana, algunos usuarios solicitan aclaración sobre una actividad. El equipo revisa las consultas y determina que la instrucción es demasiado general. Se agrega una orientación concreta y se comunica la modificación. Esta situación muestra que la divulgación no se agota con el envío del enlace: también requiere acompañar el acceso e incorporar los hallazgos relevantes al proceso de mejora.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Indicadores de comunicación y de aprovechamiento

    .bloque-texto-g.bloque-texto-g--inverso.bg5.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-3
        p.mb-0 Conviene diferenciar tres niveles de información. El primero es el alcance del mensaje, relacionado con su entrega o circulación. El segundo es el acceso efectivo, referido a la posibilidad real de abrir y consultar el recurso. El tercero es el aprovechamiento formativo, que solo puede comprobarse mediante actividades y evidencias vinculadas con el aprendizaje. Estos niveles se relacionan, pero no deben confundirse en los informes de seguimiento.

          br
          br
          | Por ejemplo, un anuncio puede tener amplia circulación y, aun así, generar pocas consultas al material si el acceso requiere permisos no previstos. También puede registrar muchos ingresos sin que los aprendices finalicen la actividad. El equipo debe interpretar los datos junto con las condiciones del entorno y las evidencias pedagógicas que serán analizadas durante la implementación.

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.mb-3.p-0.col-10.col-md-8
        img(src="@/assets/curso/temas/t3/img14.png")
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t3/img15.svg")
          .col-lg-10
            p La información sobre interacción y acceso debe recopilarse respetando las políticas institucionales de privacidad. No es necesario registrar más datos personales de los requeridos para brindar el servicio y valorar la estrategia de divulgación. Cuando se presenten resultados, conviene utilizar información agregada siempre que sea suficiente para comprender las necesidades de mejora.
        p Una vez publicado y divulgado, el recurso educativo digital puede incorporarse a las actividades formativas mediante estrategias didácticas acordes con las necesidades de los aprendices y los resultados de aprendizaje previstos.
    











































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
