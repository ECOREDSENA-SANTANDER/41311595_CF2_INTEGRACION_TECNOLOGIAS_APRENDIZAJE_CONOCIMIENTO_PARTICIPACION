export default {
  global: {
    Name: 'Evaluación, divulgación e implementación de recursos educativos digitales',
    Description:
      'Este componente aborda la evaluación técnica y pedagógica de recursos educativos digitales, considerando usabilidad, accesibilidad y tecnologías inmersivas. Integra la gestión de repositorios, metadatos, publicación y divulgación de contenidos, así como su implementación mediante metodologías activas y secuencias didácticas. Incluye criterios para valorar herramientas digitales y su impacto en los procesos formativos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación de recursos y herramientas digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Almacenamiento y gestión de recursos educativos digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Publicación y divulgación de recursos educativos digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategias de implementación didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Transferencia del conocimiento e impacto en contexto',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Condición que permite que los recursos digitales sean percibidos, comprendidos y utilizados por personas con diversas capacidades y necesidades.',
    },
    {
      termino: 'Alojamiento web',
      significado:
        'Servicio que permite almacenar y poner a disposición recursos digitales mediante internet.',
    },
    {
      termino: 'Evaluación pedagógica',
      significado:
        'Proceso de valoración de la pertinencia de un recurso educativo digital frente a los propósitos y resultados de aprendizaje.',
    },
    {
      termino: 'Implementación',
      significado:
        'Puesta en práctica de una propuesta o recurso en un entorno de formación.',
    },
    {
      termino: 'Metadatos',
      significado:
        'Datos que describen un recurso para facilitar su identificación y búsqueda.',
    },
    {
      termino: 'Metodología activa',
      significado:
        'Estrategia centrada en la participación directa del aprendiz en la construcción de su conocimiento.',
    },
    {
      termino: 'Realidad aumentada',
      significado:
        'Tecnología que incorpora elementos digitales al entorno físico visualizado mediante dispositivos compatibles.',
    },
    {
      termino: 'Realidad mixta',
      significado:
        'Tecnología que combina elementos físicos y digitales y permite su interacción espacial.',
    },
    {
      termino: 'Realidad virtual',
      significado:
        'Tecnología que permite explorar entornos digitales simulados mediante experiencias inmersivas.',
    },
    {
      termino: 'Repositorio',
      significado:
        'Plataforma para almacenar, organizar, preservar y difundir recursos.',
    },
    {
      termino: 'Secuencia didáctica',
      significado:
        'Orden articulado de actividades para alcanzar un resultado de aprendizaje.',
    },
    {
      termino: 'Tecnologías inmersivas',
      significado:
        'Tecnologías que permiten experiencias de interacción y exploración mediante entornos o elementos digitales.',
    },
    {
      termino: 'Transferencia',
      significado:
        'Aplicación de saberes en situaciones reales o simuladas del entorno.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'Facilidad, eficiencia y satisfacción con que una persona utiliza un recurso digital.',
    },
    {
      termino: 'Valoración del impacto pedagógico',
      significado:
        'Análisis de evidencias e indicadores para determinar la contribución de un recurso a los resultados de aprendizaje.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arango, G. (2013). Comunicación digital: una propuesta de análisis desde el pensamiento complejo. Palabra Clave, 16(3), 673–697.',
    },
    {
      referencia:
        'Aznar, I., Romero, J., & Rodríguez, A. (2018). La tecnología móvil de realidad virtual en educación: una revisión del estado de la literatura científica en España. Edmetic, 7(1), 256–274.',
    },
    {
      referencia:
        'Badia, A., Chumpitaz, L., Vargas, J., & Suárez, G. (2016). La percepción de la utilidad de la tecnología conforma su uso para enseñar y aprender. Revista Electrónica de Investigación Educativa, 18(3), 95–105.',
    },
    {
      referencia:
        'Barroso, J., Cabero, J., & Moreno, A. (2016). La utilización de objetos de aprendizaje en realidad aumentada en la enseñanza de la medicina. International Journal of Technology and Educational Innovation, 2(2), 77–83.',
    },
    {
      referencia:
        'Consorcio World Wide Web. (2018). Pautas de accesibilidad para el contenido web (WCAG) 2.1. W3C.',
    },
    {
      referencia:
        'García Cabrera, M. I., & Zuleta Uribe, M. E. (2024). Guía pedagógica y didáctica para la incorporación de la tecnología en los procesos formativos/educativos. Servicio Nacional de Aprendizaje, Centro de Gestión Tecnológica de Servicios.',
    },
    {
      referencia:
        'González Alarcón, J. A., & Gómez Pérez, A. (2021). Libro didáctico: herramientas digitales en la formación profesional integral. Servicio Nacional de Aprendizaje, Centro de Tecnologías Agroindustriales.',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2012). Recursos educativos digitales abiertos: Colombia.',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura. (2019). Marco de competencias de los docentes en materia de TIC.',
    },
    {
      referencia:
        'Pinto, M., Gómez-Camarero, C., & Fernández-Ramos, A. (2012). Los recursos educativos electrónicos: perspectivas y herramientas de evaluación. Revista Interamericana de Bibliotecología, 35(2), 211–230.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (1969). Manual de evaluación (2.ª ed.).',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2004). Estructura curricular: formación pedagógica para instructores de formación profesional.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (s. f.-a). Elaboración de bibliografías. Sistema de Bibliotecas SENA.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (s. f.-b). Sistema de Bibliotecas SENA: consulta bibliográfica.',
    },
    {
      referencia:
        'Tobón, S. (2013). Formación integral y competencias: pensamiento complejo, currículo, didáctica y evaluación (4.ª ed.). Ecoe Ediciones.',
    },
    {
      referencia:
        'Wiggins, G., & McTighe, J. (2005). Understanding by design (Expanded 2nd ed.). Association for Supervision and Curriculum Development.',
    },
    {
      referencia:
        'Zapata, M. (2012). Recursos educativos digitales: conceptos básicos.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Claudia Patricia Bermúdez Ardila',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
