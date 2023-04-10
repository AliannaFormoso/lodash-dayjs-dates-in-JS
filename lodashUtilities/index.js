// TODO: npm init -y
// TODO: type: module in package.json
// TODO: npm install lodash
// TODO: Import lodash

import _ from "lodash";

const entries = [{
    titulo: "Introducción a HTML5",
    descripcion: "En este artículo se explica qué es HTML5 y cómo funciona. También se detallan las principales novedades y mejoras respecto a HTML4.",
    fecha: "2022-01-15",
    autor: "Juan Pérez",
    tags: ["HTML5", "Web", "Desarrollo"],
  },
  {
    titulo: "Cómo diseñar una web responsive",
    descripcion: "En este artículo se explican las claves para diseñar una web responsive, es decir, que se adapte a diferentes tamaños de pantalla. Se detallan las herramientas y técnicas más útiles.",
    fecha: "2022-02-02",
    autor: "María García",
    tags: ["Responsive Design", "Web", "Diseño"],
  },
  {
    titulo: "Introducción a CSS3",
    descripcion: "En este artículo se explica qué es CSS3 y cómo funciona. También se detallan las principales novedades y mejoras respecto a CSS2.",
    fecha: "2022-02-15",
    autor: "Pedro González",
    tags: ["CSS3", "Web", "Desarrollo"],
  },
  {
    titulo: "Cómo optimizar el rendimiento de una web",
    descripcion: "En este artículo se explican las claves para optimizar el rendimiento de una web, es decir, para que cargue más rápido y sea más eficiente. Se detallan las herramientas y técnicas más útiles.",
    fecha: "2022-03-02",
    autor: "Ana Rodríguez",
    tags: ["Optimización", "Web", "Desarrollo"],
  },
  {
    titulo: "Cómo crear una página web desde cero",
    descripcion: "En este artículo se explican los pasos para crear una página web desde cero, desde la elección del nombre de dominio hasta la publicación en Internet. Se detallan las herramientas y técnicas más útiles.",
    fecha: "2022-03-15",
    autor: "Juan Pérez",
    tags: ["Web", "Desarrollo"],
  },
  {
    titulo: "Cómo usar jQuery en una web",
    descripcion: "En este artículo se explica qué es jQuery y cómo se puede utilizar en una web para añadir interactividad y dinamismo. Se detallan los principales métodos y funciones.",
    fecha: "2022-04-02",
    autor: "María García",
    tags: ["jQuery", "Web", "Desarrollo"],
  },
  {
    titulo: "Cómo crear un diseño atractivo para una web",
    descripcion: "En este artículo se explican las claves para crear un diseño atractivo y efectivo para una web, desde la elección de colores hasta la disposición de los elementos. Se detallan las herramientas y técnicas más útiles.",
    fecha: "2022-04-15",
    autor: "Pedro González",
    tags: ["Diseño", "Web", "Desarrollo"],
  },
];


// _.groupBy()

const entriesGrouppedByAuthor = _.groupBy(entries, "autor");
console.log("---All authors", entriesGrouppedByAuthor);

// Output

/* ---All authors {
  'Juan Pérez': [
    {
      titulo: 'Introducción a HTML5',
      descripcion: 'En este artículo se explica qué es HTML5 y cómo funciona. También se detallan las principales novedades y mejoras respecto a HTML4.',
      fecha: '2022-01-15',
      autor: 'Juan Pérez',
      tags: [Array]
    },
    {
      titulo: 'Cómo crear una página web desde cero',
      descripcion: 'En este artículo se explican los pasos para crear una página web desde cero, desde la elección del nombre de dominio hasta la publicación en Internet. Se detallan las herramientas y técnicas más útiles.',
      fecha: '2022-03-15',
      autor: 'Juan Pérez',
      tags: [Array]
    }
  ],
  'María García': [
    {
      titulo: 'Cómo diseñar una web responsive',
      descripcion: 'En este artículo se explican las claves para diseñar una web responsive, es decir, que se adapte a diferentes tamaños de pantalla. Se detallan las herramientas y técnicas más útiles.',
      fecha: '2022-02-02',
      autor: 'María García',
      tags: [Array]
    },
    {
      titulo: 'Cómo usar jQuery en una web',
      descripcion: 'En este artículo se explica qué es jQuery y cómo se puede utilizar en una web para añadir interactividad y dinamismo. Se detallan los principales métodos y funciones.',
      fecha: '2022-04-02',
      autor: 'María García',
      tags: [Array]
    }
  ],
  'Pedro González': [
    {
      titulo: 'Introducción a CSS3',
      descripcion: 'En este artículo se explica qué es CSS3 y cómo funciona. También se detallan las principales novedades y mejoras respecto a CSS2.',
      fecha: '2022-02-15',
      autor: 'Pedro González',
      tags: [Array]
    },
    {
      titulo: 'Cómo crear un diseño atractivo para una web',
      descripcion: 'En este artículo se explican las claves para crear un diseño atractivo y efectivo para una web, desde la elección de colores hasta la disposición de los elementos. Se detallan las herramientas y técnicas más útiles.',
      fecha: '2022-04-15',
      autor: 'Pedro González',
      tags: [Array]
    }
  ],
  'Ana Rodríguez': [
    {
      titulo: 'Cómo optimizar el rendimiento de una web',
      descripcion: 'En este artículo se explican las claves para optimizar el rendimiento de una web, es decir, para que cargue más rápido y sea más eficiente. Se detallan las herramientas y técnicas más útiles.',
      fecha: '2022-03-02',
      autor: 'Ana Rodríguez',
      tags: [Array]
    }
  ]
} */



// Grouping just by Ana...
console.log("----Ana", entriesGrouppedByAuthor["Ana Rodríguez"]);

// Output

/* ----Ana [
  {
    titulo: 'Cómo optimizar el rendimiento de una web',
    descripcion: 'En este artículo se explican las claves para optimizar el rendimiento de una web, es decir, para que cargue más rápido y sea más eficiente. Se detallan las herramientas y técnicas más útiles.',
    fecha: '2022-03-02',
    autor: 'Ana Rodríguez',
    tags: [ 'Optimización', 'Web', 'Desarrollo' ]
  }
] */



// _.filter
function filterByCss3Tag(entry) {
  return _.includes(entry.tags, "CSS3");
}
const entriesFilteredByCss3Tag = _.filter(entries, filterByCss3Tag);
console.log("----filtered css", entriesFilteredByCss3Tag);

//Output

/* ----filtered css [
  {
    titulo: 'Introducción a CSS3',
    descripcion: 'En este artículo se explica qué es CSS3 y cómo funciona. También se detallan las principales novedades y mejoras respecto a CSS2.',
    fecha: '2022-02-15',
    autor: 'Pedro González',
    tags: [ 'CSS3', 'Web', 'Desarrollo' ]
  }
] */




// _.map

const entriesMappedByTitle = _.map(entries, "titulo");
console.log("---mapped titles", entriesMappedByTitle);

// Output

/* ---mapped titles [
  'Introducción a HTML5',
  'Cómo diseñar una web responsive',
  'Introducción a CSS3',
  'Cómo optimizar el rendimiento de una web',
  'Cómo crear una página web desde cero',
  'Cómo usar jQuery en una web',
  'Cómo crear un diseño atractivo para una web'
] */




// _.order

const entriesOrderedByDate = _.orderBy(
  entries,
  ["fecha", "titulo"],
  ["dsc", "asc"]
);
console.log("----ordered", entriesOrderedByDate);

//Output

/* ----ordered [
  {
    titulo: 'Introducción a HTML5',
    descripcion: 'En este artículo se explica qué es HTML5 y cómo funciona. También se detallan las principales novedades y mejoras respecto a HTML4.',
    fecha: '2022-01-15',
    autor: 'Juan Pérez',
    tags: [ 'HTML5', 'Web', 'Desarrollo' ]
  },
  {
    titulo: 'Cómo diseñar una web responsive',
    descripcion: 'En este artículo se explican las claves para diseñar una web responsive, es decir, que se adapte a diferentes tamaños de pantalla. Se detallan las herramientas y técnicas más útiles.',
    fecha: '2022-02-02',
    autor: 'María García',
    tags: [ 'Responsive Design', 'Web', 'Diseño' ]
  },
  {
    titulo: 'Introducción a CSS3',
    descripcion: 'En este artículo se explica qué es CSS3 y cómo funciona. También se detallan las principales novedades y mejoras respecto a CSS2.',
    fecha: '2022-02-15',
    autor: 'Pedro González',
    tags: [ 'CSS3', 'Web', 'Desarrollo' ]
  },
  {
    titulo: 'Cómo optimizar el rendimiento de una web',
    descripcion: 'En este artículo se explican las claves para optimizar el rendimiento de una web, es decir, para que cargue más rápido y sea más eficiente. Se detallan las herramientas y técnicas más útiles.',
    fecha: '2022-03-02',
    autor: 'Ana Rodríguez',
    tags: [ 'Optimización', 'Web', 'Desarrollo' ]
  },
  {
    titulo: 'Cómo crear una página web desde cero',
    descripcion: 'En este artículo se explican los pasos para crear una página web desde cero, desde la elección del nombre de dominio hasta la publicación en Internet. Se detallan las herramientas y técnicas más útiles.',
    fecha: '2022-03-15',
    autor: 'Juan Pérez',
    tags: [ 'Web', 'Desarrollo' ]
  },
  {
    titulo: 'Cómo usar jQuery en una web',
    descripcion: 'En este artículo se explica qué es jQuery y cómo se puede utilizar en una web para añadir interactividad y dinamismo. Se detallan los principales métodos y funciones.',
    fecha: '2022-04-02',
    autor: 'María García',
    tags: [ 'jQuery', 'Web', 'Desarrollo' ]
  },
  {
    titulo: 'Cómo crear un diseño atractivo para una web',
    descripcion: 'En este artículo se explican las claves para crear un diseño atractivo y efectivo para una web, desde la elección de colores hasta la disposición de los elementos. Se detallan las herramientas y técnicas más útiles.',
    fecha: '2022-04-15',
    autor: 'Pedro González',
    tags: [ 'Diseño', 'Web', 'Desarrollo' ]
  }
] */



// _.reduce()

function countTags(acc, entry) {
  return acc + entry.tags.length;
}

const countEntriesTags = _.reduce(entries, countTags, 0);
console.log("---tags", countEntriesTags);

// Output
// ---tags 20



// _.merge
const mergedEntriesTags = _.merge(entries[0], entries[1]);
console.log("---merged entries", mergedEntriesTags);

//Output
/* ---merged entries {
  titulo: 'Cómo diseñar una web responsive',
  descripcion: 'En este artículo se explican las claves para diseñar una web responsive, es decir, que se adapte a diferentes tamaños de pantalla. Se detallan las herramientas y técnicas más útiles.',
  fecha: '2022-02-02',
  autor: 'María García',
  tags: [ 'Responsive Design', 'Web', 'Diseño' ]
}
*/




// _.pick

const pickedTitleTagsEntry = _.pick(entries[0], ["titulo", "tags"]);
console.log("---pick", entries[0], pickedTitleTagsEntry);

//Output

/* ---pick {
  titulo: 'Cómo diseñar una web responsive',
  descripcion: 'En este artículo se explican las claves para diseñar una web responsive, es decir, que se adapte a diferentes tamaños de pantalla. Se detallan las herramientas y técnicas más útiles.',
  fecha: '2022-02-02',
  autor: 'María García',
  tags: [ 'Responsive Design', 'Web', 'Diseño' ]
} {
  titulo: 'Cómo diseñar una web responsive',
  tags: [ 'Responsive Design', 'Web', 'Diseño' ]
}  */




// _.omit

const omittedDescriptEntry = _.omit(entries[1], "descripcion");
console.log("-----omit", omittedDescriptEntry);

// Output
/* -----omit {
  titulo: 'Cómo diseñar una web responsive',
  fecha: '2022-02-02',
  autor: 'María García',
  tags: [ 'Responsive Design', 'Web', 'Diseño' ]
} */



// _.has

const hasDate = _.has(entries[2], "fecha");
console.log("---has", hasDate);

// Output
// ---has true


// _.invert() and ._first

function mapFirstTitle(entries) {
  return _.first(_.map(entries, "titulo"));
}

const invertedTitleByEntry = _.invert(
  _.mapValues(_.groupBy(entries, "autor"), mapFirstTitle)
);

console.log("----first inverted", invertedTitleByEntry);

// Output

/* ----first inverted {
  'Cómo diseñar una web responsive': 'María García',
  'Introducción a CSS3': 'Pedro González',
  'Cómo optimizar el rendimiento de una web': 'Ana Rodríguez',
  'Cómo crear una página web desde cero': 'Juan Pérez'
} */



// Assignments: Filter tags with tag Desarrollo, group by author and map by title

// Filter entries with tag desarrollo

const filteredEntriesByDev = _.filter(entries, function (entry) {
  return _.includes(entry.tags, "Desarrollo");
});
console.log("Entries filtered by devtag---", filteredEntriesByDev);

// Output

/* Entries filtered by devtag--- [
  {
    titulo: 'Introducción a CSS3',
    descripcion: 'En este artículo se explica qué es CSS3 y cómo funciona. También se detallan las principales novedades y mejoras respecto a CSS2.',
    fecha: '2022-02-15',
    autor: 'Pedro González',
    tags: [ 'CSS3', 'Web', 'Desarrollo' ]
  },
  {
    titulo: 'Cómo optimizar el rendimiento de una web',
    descripcion: 'En este artículo se explican las claves para optimizar el rendimiento de una web, es decir, para que cargue más rápido y sea más eficiente. Se detallan las herramientas y técnicas más útiles.',
    fecha: '2022-03-02',
    autor: 'Ana Rodríguez',
    tags: [ 'Optimización', 'Web', 'Desarrollo' ]
  },
  {
    titulo: 'Cómo crear una página web desde cero',
    descripcion: 'En este artículo se explican los pasos para crear una página web desde cero, desde la elección del nombre de dominio hasta la publicación en Internet. Se detallan las herramientas y técnicas más útiles.',
    fecha: '2022-03-15',
    autor: 'Juan Pérez',
    tags: [ 'Web', 'Desarrollo' ]
  },
  {
    titulo: 'Cómo usar jQuery en una web',
    descripcion: 'En este artículo se explica qué es jQuery y cómo se puede utilizar en una web para añadir interactividad y dinamismo. Se detallan los principales métodos y funciones.',
    fecha: '2022-04-02',
    autor: 'María García',
    tags: [ 'jQuery', 'Web', 'Desarrollo' ]
  },
  {
    titulo: 'Cómo crear un diseño atractivo para una web',
    descripcion: 'En este artículo se explican las claves para crear un diseño atractivo y efectivo para una web, desde la elección de colores hasta la disposición de los elementos. Se detallan las herramientas y técnicas más útiles.',
    fecha: '2022-04-15',
    autor: 'Pedro González',
    tags: [ 'Diseño', 'Web', 'Desarrollo' ]
  }
] */



// Groupping by author

const grouppingByAuthor = _.groupBy(filteredEntriesByDev, "autor");
console.log("---groupping", grouppingByAuthor);

// Output

/* ---groupping {
  'Pedro González': [
    {
      titulo: 'Introducción a CSS3',
      descripcion: 'En este artículo se explica qué es CSS3 y cómo funciona. También se detallan las principales novedades y mejoras respecto a CSS2.',
      fecha: '2022-02-15',
      autor: 'Pedro González',
      tags: [Array]
    },
    {
      titulo: 'Cómo crear un diseño atractivo para una web',
      descripcion: 'En este artículo se explican las claves para crear un diseño atractivo y efectivo para una web, desde la elección de colores hasta la disposición de los elementos. Se detallan las herramientas y técnicas más útiles.',
      fecha: '2022-04-15',
      autor: 'Pedro González',
      tags: [Array]
    }
  ],
  'Ana Rodríguez': [
    {
      descripcion: 'En este artículo se explica qué es jQuery y cómo se puede utilizar en una web para añadir interactividad y dinamismo. Se detallan los principales métodos y funciones.',      fecha: '2022-04-02',      autor: 'María García',      tags: [Array]
    }  ]} */



// Mapping by title

const titlesByAuthor = _.mapValues(grouppingByAuthor, function (entries) {
  return _.map(entries, "titulo");
});
console.log("--mapping", titlesByAuthor);

// Output

/* --mapping {  'Pedro González': [    'Introducción a CSS3',
    'Cómo crear un diseño atractivo para una web'
  ],  'Ana Rodríguez': [ 'Cómo optimizar el rendimiento de una web' ],  'Juan Pérez': [ 'Cómo crear una página web desde cero' ],  'María García': [ 'Cómo usar jQuery en una web' ]} */