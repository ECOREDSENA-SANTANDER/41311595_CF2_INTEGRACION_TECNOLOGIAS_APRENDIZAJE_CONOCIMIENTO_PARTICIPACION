<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Almacenamiento y gestión de recursos educativos digitales
    

    .bloque-texto-g.bloque-texto-g--inverso.bg4.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-3
          p.mb-0 Una vez evaluado y validado, el recurso educativo digital debe conservarse en un espacio seguro y estructurado que facilite su localización, actualización y reutilización.
            br
            br
            | La gestión de estos recursos comprende actividades orientadas a mantenerlos organizados, identificables y disponibles para su uso en diferentes contextos de formación. Esto implica seleccionar espacios de almacenamiento adecuados, registrar información descriptiva y establecer procedimientos para conservar las versiones de los archivos, de modo que puedan recuperarse cuando se necesiten.
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Repositorios digitales, bibliotecas y metadatos

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.mb-3.p-0.col-10.col-md-8
        img(src="@/assets/curso/temas/t2/img02.png")
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t2/img03.svg")
          .col-lg-10
            p Los repositorios permiten almacenar, organizar, preservar y difundir materiales académicos y educativos. Las bibliotecas digitales facilitan el acceso organizado a colecciones de recursos y documentos en formato digital. Los metadatos describen el recurso mediante información como título, autor, palabras clave, fecha, licencia y descripción, facilitando su recuperación y visibilidad.
        p Aunque los repositorios y las bibliotecas digitales pueden ofrecer funciones similares, su organización responde a finalidades particulares. Los primeros suelen facilitar el depósito, la conservación y la consulta de materiales producidos por instituciones o comunidades. Las bibliotecas digitales reúnen colecciones seleccionadas y organizadas para su consulta, utilizando mecanismos de búsqueda y clasificación que favorecen el acceso a la información.
      p En el ámbito educativo, estos espacios permiten consultar materiales de apoyo, localizar recursos relacionados con un área de conocimiento y recuperar contenidos que pueden emplearse en nuevas experiencias de aprendizaje, según sus condiciones de acceso y utilización.

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2.
          span Funciones de los espacios para la gestión de recursos educativos digitales

        .tabla-a.color-acento-contenido.mb-0
          table(style="table-layout: fixed; width:100%;")
            thead
              tr
                th.bg3.text-izq.w-25 Espacio
                th.bg3.text-izq Función principal
                th.bg3.text-izq Aplicación en formación
            tbody
              tr
                td.text-izq Repositorio institucional
                td.text-izq Depositar, organizar y preservar materiales digitales.
                td.text-izq Conservar recursos elaborados para su consulta y reutilización.
              tr
                td.text-izq Biblioteca digital
                td.text-izq Facilitar la consulta de colecciones organizadas.
                td.text-izq Localizar documentos y materiales de apoyo para actividades formativas.
              tr
                td.text-izq Plataforma educativa
                td.text-izq Administrar contenidos y actividades de aprendizaje.
                td.text-izq Disponer recursos dentro de cursos o ambientes virtuales de formación.
              tr
                td.text-izq Almacenamiento en la nube
                td.text-izq Guardar archivos y facilitar su recuperación o gestión compartida.
                td.text-izq Mantener archivos de trabajo y copias de respaldo con permisos definidos.

      .col-lg-4.p-0.col-8.col-md-5
        img(src='@/assets/curso/temas/t2/img04.png', alt='')

    p Para que los metadatos sean útiles, es importante mantener criterios uniformes en su registro, evitar campos incompletos y actualizar la información cuando el recurso tenga modificaciones relevantes. Esto facilita la identificación de la versión vigente y mejora la consistencia de los registros dentro de una colección.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Información esencial para identificar un recurso digital

    .row.mb-4.text-white.justify-content-center(data-aos="zoom-in-left")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          h4.text-center Identificación
          p.mb-0.text-center Registrar el título y una descripción breve que permitan reconocer el contenido y su propósito formativo.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          h4.text-center Autoría
          p.mb-0.text-center Indicar el autor o la institución responsable de la creación del recurso, según la información disponible.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          h4.text-center Clasificación
          p.mb-0.text-center Incluir palabras clave, tema o área de conocimiento para facilitar su localización en una colección.

    .row.text-white.justify-content-center.mb-4
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          h4.text-center Características técnicas
          p.mb-0.text-center Señalar el formato del archivo, los requisitos de uso o la versión, cuando estos datos sean necesarios para su recuperación.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100
          h4.text-center Condiciones de utilización
          p.mb-0.text-center Registrar la licencia o las restricciones de uso aplicables para orientar su consulta y reutilización.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Organización, preservación y recuperación de recursos

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.mb-3.p-0.col-10.col-md-8
        img(src="@/assets/curso/temas/t2/img05.png")
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t2/img06.svg")
          .col-lg-10
            p La conservación de un recurso educativo digital requiere medidas que permitan mantener su disponibilidad y evitar pérdidas, alteraciones no previstas o confusiones entre versiones. Por ello, resulta conveniente establecer una estructura de almacenamiento que facilite reconocer los archivos y sus relaciones con las actividades formativas.
        p La organización puede apoyarse en nombres de archivo descriptivos, carpetas identificadas por proyecto o componente y registros que indiquen el estado de cada material. Cuando se realizan ajustes, también es necesario distinguir la versión vigente de aquellas que se conservan como antecedentes.
      p La preservación digital no consiste únicamente en guardar un archivo. También comprende acciones destinadas a mantenerlo utilizable con el paso del tiempo, considerando posibles cambios en los formatos, las aplicaciones y los entornos tecnológicos. Según la importancia del recurso, pueden requerirse verificaciones periódicas de integridad, actualización de formatos o migración a nuevos sistemas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Prácticas para conservar y recuperar recursos digitales

    .row.justify-content-center.align-items-center.mb-1(data-aos="zoom-in-left")
      .col-lg-3.mb-3.col-9.col-md-6
        img(src='@/assets/curso/temas/t2/img07.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-acento-botones--borde.p-4(titulo="Control de versiones")
            p Identificar la versión vigente de cada recurso y conservar un registro de los cambios relevantes para evitar el uso accidental de archivos desactualizados.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Copias de respaldo")
            p Mantener copias adicionales en espacios autorizados y comprobar periódicamente que puedan recuperarse cuando sea necesario.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Control de permisos")
            p Definir quiénes pueden consultar, modificar o administrar los archivos, según las necesidades del equipo y las políticas institucionales.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Verificación de integridad")
            p Revisar que los archivos no presenten alteraciones o daños que impidan su apertura, consulta o funcionamiento.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Revisión de compatibilidad")
            p Comprobar que los formatos y aplicaciones necesarios para utilizar el recurso continúen disponibles y sean adecuados para los entornos previstos.

    p Para facilitar la recuperación, los recursos deben contar con criterios de clasificación que respondan a las necesidades de sus usuarios. Una búsqueda puede realizarse mediante el título, las palabras clave, el área temática o los datos de autoría, siempre que esta información se encuentre registrada y organizada correctamente.
    p.mb-0 Por ejemplo, una institución que conserva varias versiones de un recurso interactivo debe identificar cuál corresponde a la edición vigente, registrar sus características y mantener disponibles los archivos necesarios para su funcionamiento. De esta manera, el equipo de formación puede recuperar el material adecuado sin confundirlo con versiones anteriores.

    .fondo03.p-3.mb-0.p-lg-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 1. 
        span Evaluación y divulgación de recursos educativos digitales
      img(src='@/assets/curso/temas/t2/fig1.svg', alt='Infografía con tres condiciones del RED: usabilidad y accesibilidad, repositorios digitales, y publicación y alojamiento para asegurar su calidad.')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Validación de registros y políticas de preservación

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-3.mb-3.p-3.col-8.col-md-6
        img(src='@/assets/curso/temas/t2/img08.png', alt='')
      .col-lg-9.mb-1
        .row.justify-content-center.mb-3.bg4.g-0.align-items-stretch
          .col-lg-7.p-4
            br
            p.text-white.mb-0 En la gestión institucional no basta con asignar un título al recurso y guardar su archivo principal. También debe verificarse que el registro descriptivo represente correctamente el contenido y que las condiciones de conservación permitan recuperarlo completo. Este control aporta una dimensión de calidad que complementa la identificación básica mediante metadatos.
          .col-lg-5.p-0
            img.w-100.h-100.d-block(src='@/assets/curso/temas/t2/img09.svg', alt='', style='object-fit: cover;')
        p.mb-2 La validación comienza por revisar la consistencia entre los campos. El título debe corresponder al material depositado; la descripción debe señalar el propósito y el público previsto; las palabras clave deben facilitar búsquedas pertinentes y no limitarse a términos demasiado amplios. Cuando el recurso pertenece a una serie o constituye una versión actualizada, conviene registrar esa relación para evitar que los usuarios consulten por error un material reemplazado.
      p También es necesario diferenciar la información descriptiva de la información administrativa. La primera ayuda a encontrar e interpretar el recurso; la segunda permite conocer responsabilidades de conservación, condiciones de acceso, fechas de actualización y políticas aplicables. Los datos técnicos, por su parte, facilitan reconocer dependencias de formatos y aplicaciones. Estas categorías pueden relacionarse, pero cumplen funciones distintas durante el ciclo de vida del recurso.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Ejemplo de validación de un recurso interactivo

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src='@/assets/curso/temas/t2/img10.png', alt='')
    p Una institución recibe un recurso sobre prevención de riesgos compuesto por una página de inicio, archivos multimedia y actividades interactivas. El equipo responsable confirma que el título y la descripción correspondan a su contenido y que la versión registrada sea la aprobada. Después comprueba que se hayan incorporado todos los archivos asociados, que los enlaces internos funcionen y que exista información sobre los requisitos mínimos para su consulta.
    p Si la actividad utiliza archivos alojados fuera del paquete principal, también deben identificarse esas dependencias. De lo contrario, el recurso podría conservarse aparentemente completo y dejar de funcionar cuando cambie el servicio externo. La documentación de estos elementos permite planear sustituciones, actualizaciones o mecanismos de respaldo.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Verificación de ingreso a un repositorio
  
    LineaTiempoE.color-primario.mb-4(data-aos="zoom-in-left")
      .row.align-items-center(titulo="Paso 1" subtitulo="")
        .col-lg-3.col-md-4.col-7.mb-3
          figure
            img(src='@/assets/curso/temas/t2/1.svg', alt='')
        .col-lg-9.col-md-8.col-12
          h4 Confirmar el archivo
          p Revisar que el material corresponda a la versión aprobada y que sus componentes se encuentren completos.

      .row.align-items-center(titulo="Paso 2" subtitulo="")
        .col-lg-3.col-md-4.col-7.mb-3
          figure
            img(src='@/assets/curso/temas/t2/2.svg', alt='')
        .col-lg-9.col-md-8.col-12
          h4 Validar el registro
          p Comprobar título, descripción, autoría, palabras clave y condiciones de utilización.

      .row.align-items-center(titulo="Paso 3" subtitulo="")
        .col-lg-3.col-md-4.col-7.mb-3
          figure
            img(src='@/assets/curso/temas/t2/3.svg', alt='')
        .col-lg-9.col-md-8.col-12
          h4 Revisar dependencias
          p Identificar aplicaciones, enlaces o archivos complementarios necesarios para el funcionamiento.

      .row.align-items-center(titulo="Paso 4" subtitulo="")
        .col-lg-3.col-md-4.col-7.mb-3
          figure
            img(src='@/assets/curso/temas/t2/4.svg', alt='')
        .col-lg-9.col-md-8.col-12
          h4 Probar la recuperación
          p Descargar o consultar el recurso desde un perfil autorizado y verificar que se abra correctamente.

      .row.align-items-center(titulo="Paso 5" subtitulo="")
        .col-lg-3.col-md-4.col-7.mb-3
          figure
            img(src='@/assets/curso/temas/t2/5.svg', alt='')
        .col-lg-9.col-md-8.col-12
          h4 Documentar la aceptación
          p Registrar hallazgos, ajustes pendientes y responsable de la siguiente revisión.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Políticas de conservación y revisión periódica

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.mb-3.p-0.col-10.col-md-8
        img(src="@/assets/curso/temas/t2/img11.png")
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src="@/assets/curso/temas/t2/img12.svg")
          .col-lg-10
            p La preservación requiere decisiones institucionales sobre quién administra los recursos, cuándo deben verificarse y bajo qué condiciones se mantienen versiones históricas. Una política de conservación puede definir la frecuencia de revisión, los criterios para retirar materiales obsoletos y las responsabilidades frente a pérdidas o errores de acceso. Estas decisiones deben adaptarse al valor pedagógico de cada recurso y a la capacidad operativa del repositorio.
        p Una verificación periódica puede incluir apertura de archivos, integridad de los paquetes, permanencia de enlaces esenciales y vigencia de los formatos. Cuando se detecta un cambio tecnológico que afecta el acceso, el equipo debe determinar si corresponde actualizar el recurso, migrar sus archivos o conservar una alternativa accesible. La documentación de estas decisiones ayuda a prevenir soluciones improvisadas ante fallas de funcionamiento.
      p La gestión también debe contemplar el retiro o reemplazo de materiales. Un recurso que incluye información normativa o técnica desactualizada puede generar errores en la formación si continúa disponible sin advertencia. En estos casos, resulta conveniente señalar su estado, remitir a la versión vigente y conservar el antecedente únicamente cuando exista una justificación institucional para hacerlo.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t4/img03.svg")
          h3.bg2.py-1.w-card-text.text-white Recuperación y reutilización responsables

    .row.justify-content-center.mb-3.bg1.g-0(data-aos="zoom-in-left")
      .col-lg-7.p-4
        p Cuando otro instructor necesita reutilizar un recurso, conviene verificar no solo que pueda localizarlo, sino que su contenido conserve pertinencia para el nuevo grupo. Debe revisar las condiciones de uso, la vigencia de la información y los posibles cambios en los resultados de aprendizaje. Un material técnicamente recuperable puede requerir actualización pedagógica antes de implementarse en otro contexto.
        p.mb-0 De esta manera, la gestión de repositorios se transforma en un proceso de aseguramiento de la calidad. Los metadatos, las verificaciones de integridad y las políticas de conservación trabajan de forma coordinada para que los recursos sigan siendo identificables, utilizables y pertinentes a lo largo del tiempo.
      .col-lg-5.p-0
        img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t2/img13.png', alt='')

    p Una gestión organizada contribuye a la continuidad de los procesos formativos, facilita el aprovechamiento de materiales existentes y reduce el riesgo de perder recursos que requieren tiempo y trabajo para su elaboración. Además, establece condiciones para su posterior publicación y divulgación, procesos que se abordarán en el siguiente numeral.









































































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
