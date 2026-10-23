<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Evaluación, divulgación e implementación de recursos educativos digitales.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> validar la apropiación de conceptos sobre evaluación técnica y pedagógica, usabilidad, accesibilidad, repositorios, metadatos, publicación, divulgación, implementación didáctica, transferencia del conocimiento y valoración del impacto pedagógico.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de evaluar un recurso educativo digital antes de implementarlo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar que responda al propósito pedagógico y funcione adecuadamente en los entornos de uso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Elegir únicamente los colores y elementos decorativos que tendrá la interfaz.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir los resultados de aprendizaje por funcionalidades tecnológicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Publicarlo de inmediato sin realizar comprobaciones previas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué aspectos se comprueban principalmente durante la evaluación técnica de un recurso educativo digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La popularidad del recurso entre comunidades externas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El funcionamiento de enlaces, tiempos de carga, visualización y adaptación a diferentes dispositivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La cantidad de autores que participaron en su elaboración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El número de actividades presenciales que acompaña al recurso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué describe mejor la usabilidad de un recurso educativo digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La posibilidad de almacenar el recurso durante largos periodos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El conjunto de datos utilizados para identificar al autor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La facilidad, eficiencia y satisfacción con la que una persona utiliza el recurso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La difusión del recurso en redes y comunidades educativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál práctica favorece directamente la accesibilidad de un recurso educativo digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar únicamente archivos de gran tamaño para mejorar la calidad visual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Limitar la consulta del recurso a un solo tipo de dispositivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar los apoyos textuales cuando exista contenido audiovisual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incorporar contraste adecuado, textos alternativos y subtítulos para facilitar el acceso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Para qué se utilizan los metadatos en la gestión de un recurso educativo digital?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para definir automáticamente la metodología activa de una secuencia didáctica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para reemplazar el contenido pedagógico por información administrativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para describirlo mediante datos como título, autor, palabras clave, fecha, licencia y descripción, facilitando su recuperación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Para medir exclusivamente la satisfacción de los aprendices.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué función cumplen las bibliotecas digitales dentro de la gestión de recursos educativos?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Convertir cualquier material en un recurso de dominio público.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar el acceso organizado a colecciones de recursos y documentos en formato digital.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir los repositorios institucionales en todos los contextos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir los indicadores de impacto de una propuesta didáctica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál función caracteriza a los repositorios digitales?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asignar automáticamente licencias abiertas a los materiales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Seleccionar la metodología activa más adecuada para cada grupo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Almacenar, organizar, preservar y difundir materiales académicos y educativos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar las pruebas de funcionamiento del recurso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué relación existe entre publicación y alojamiento de un recurso educativo digital?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La publicación pone a disposición la versión definitiva y el alojamiento debe proporcionar un acceso estable para su consulta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La publicación evalúa la usabilidad y el alojamiento selecciona los instrumentos de seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La publicación organiza los metadatos y el alojamiento reemplaza la divulgación colaborativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La publicación determina la población objetivo y el alojamiento define los resultados de aprendizaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué acción favorece la divulgación colaborativa de un recurso educativo digital?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Socializarlo en redes de docentes, comunidades académicas, foros y plataformas colaborativas para promover reutilización y retroalimentación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Mantener el enlace restringido exclusivamente al equipo que produjo el recurso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar los espacios de interacción para evitar comentarios de otros usuarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Conservarlo únicamente en el dispositivo personal del instructor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'En el ciclo final del recurso educativo digital, ¿qué se verifica en la etapa Evaluar?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Metadatos, políticas del repositorio y permisos de publicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Usabilidad, accesibilidad y funcionamiento técnico del recurso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Metodología activa, secuencia didáctica y población objetivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Desempeño, satisfacción y oportunidades de mejora después de la aplicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el resultado esperado de la etapa Almacenar dentro del ciclo final del recurso educativo digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un recurso difundido únicamente mediante redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una secuencia didáctica organizada en apertura, desarrollo y cierre.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un recurso organizado y preservado mediante catalogación y uso de repositorios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una metodología activa seleccionada para una situación formativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué resultado corresponde a la etapa Divulgar del ciclo final del recurso educativo digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un recurso con la población objetivo caracterizada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un material con los resultados de aprendizaje reformulados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un recurso almacenado sin posibilidad de consulta externa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un recurso visible y accesible mediante enlaces y socialización en comunidades educativas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué buscan promover las metodologías activas mediadas por TIC?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La participación dinámica del aprendiz en la construcción de su conocimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La dependencia exclusiva del instructor para resolver todas las actividades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La reducción del proceso formativo a la exposición de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La utilización de una misma estrategia sin considerar el contexto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál conjunto corresponde a metodologías activas mencionadas en el componente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conferencia magistral, dictado y memorización repetitiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aprendizaje basado en proyectos, aula invertida y gamificación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Catalogación, metadatos y preservación documental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contraste, subtítulos y textos alternativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuáles son los tres momentos recomendados para organizar una secuencia didáctica?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagnóstico, publicación y divulgación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Caracterización, almacenamiento y transferencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Apertura, desarrollo y cierre.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseño, alojamiento y preservación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué significa transferir el conocimiento en el contexto de este componente?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Guardar el recurso en un repositorio sin utilizarlo en actividades formativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Compartir únicamente el enlace del recurso con otros instructores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cambiar la metodología después de finalizar la evaluación del impacto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aplicar lo aprendido en situaciones reales o simuladas del entorno social o productivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué debe definirse para aplicar un recurso educativo digital?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modalidad, entorno, población, necesidades, infraestructura y recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo el nombre del recurso y la herramienta de diseño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente el número de participantes y la duración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente el repositorio y la licencia del material.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué aspectos permiten valorar el impacto pedagógico?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Colores de interfaz, tamaño del archivo y cantidad de imágenes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Desempeño, apropiación, transferencia, usabilidad, satisfacción y mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Número de plataformas y velocidad del equipo del instructor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cantidad de enlaces externos incluidos en el recurso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'En la ruta didáctica, ¿qué corresponde a la etapa Caracterizar?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir indicadores de impacto e instrumentos de seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elegir una metodología activa y justificar la selección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar el contexto, identificar necesidades y reconocer recursos disponibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Diseñar la apertura, el desarrollo y el cierre de la secuencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: 'En la ruta didáctica, ¿qué corresponde a la etapa Definir?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Publicar enlaces y socializar el recurso en comunidades educativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Caracterizar la población y reconocer los recursos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Estructurar la secuencia mediante apertura, desarrollo y cierre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer criterios de calidad, indicadores de impacto e instrumentos de seguimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
