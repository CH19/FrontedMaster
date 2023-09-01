# Notas React

## Clas1 1

---

### ¿Que es React?

---

ReactJS es una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web. Creada por Facebook, React contiene una colección de fragmentos de código JavaScript reutilizables utilizados para crear interfaces de usuario (UI) llamadas componentes.

Es importante señalar que ReactJS no es un framework de JavaScript. Esto porque sólo es responsable de renderizar los componentes de la capa de vista de una aplicación. React es una alternativa a frameworks como Angular y Vue, que permiten crear funciones complejas.

Los componentes de React son funciones de JavaScript. ¿Quieres mostrar algún contenido condicionalmente? Utiliza una sentencia if. ¿Mostrar una lista? Prueba la función map() de un array.

Los componentes de React reciben datos y devuelven lo que debe aparecer en la pantalla. Puedes pasarles nuevos datos en respuesta a una interacción, como cuando el usuario escribe en un campo de texto. React actualizará entonces la pantalla para que se corresponda con los nuevos datos.

### JSX y cual es su importancia?

JSX es una extensión de sintaxis para JavaScript que le permite describir su interfaz de usuario en una sintaxis familiar similar a HTML . Lo bueno de JSX es que no es necesario aprender ningún símbolo o sintaxis nuevos fuera de HTML y JavaScript.

Tenga en cuenta que los navegadores no entienden JSX de fábrica, por lo que necesitará un compilador de JavaScript, como Babel , para transformar su código JSX en JavaScript normal. El uso de este compilador lo demostraremos mas adelante.

JSX es una extensión de la sintaxis de JavaScript utilizada en la creación de elementos de React. Los desarrolladores la emplean para incrustar código HTML en objetos JavaScript. Ya que JSX acepta expresiones válidas de JavaScript e incrustación de funciones, puede simplificar las estructuras de código complejas.

La Web se ha construido sobre HTML, CSS, y JavaScript. Durante muchos años, los desarrolladores web mantuvieron el contenido en HTML, el diseño en CSS, y la lógica en JavaScript, ¡a menudo en archivos separados!. El contenido se marcó dentro del HTML mientras que la lógica de la pagina vivía por separado en JavaScript

A medida que la Web se volvió más interactiva, la lógica determinó cada vez más el contenido. ¡JavaScript estaba a cargo del HTML! Esto es la razón por la que en React, la lógica de renderizado y el marcado viven juntos en el mismo lugar: componentes.


#### Reglas de JSX

1. Devolver un solo elemento raíz

Para devolver múltiples elementos de un componente, envuélvelos con una sola etiqueta principal. Por ejemplo, puedes usar un 

```<div>```

Si no deseas agregar un
adicional a tu marcado, puedes escribir <> y en su lugar

Esta etiqueta vacía se llama un Fragmento. Los Fragmentos te permiten agrupar cosas sin dejar ningún rastro en el árbol HTML del navegador.

JSX parece HTML, pero por debajo se transforma en objetos planos de JavaScript. No puedes devolver dos objetos desde una función sin envolverlos en un array. Esto explica por qué tampoco puedes devolver dos etiquetas JSX sin envolverlas en otra etiqueta o Fragmento.

2. Cerrar todas las etiquetas

JSX requiere que las etiquetas se cierren explícitamente: las etiquetas de cierre automático como <img> deben convertirse en <img />, y etiquetas envolventes como <li>naranjas deben convertirse como 

```<li>naranjas</li>```

3. lowerCamelCase a la mayoria de atributos

JSX se convierte en JavaScript y los atributos escritos en JSX se convierten en keys de objetos JavaScript. En tus propios componentes, a menudo vas a querer leer esos atributos en variables. Pero JavaScript tiene limitaciones en los nombres de variables. Por ejemplo, sus nombres no pueden contener guiones ni ser palabras reservadas como class.

Por eso, en React, muchos atributos HTML y SVG están escritos en camelCase. Por ejemplo, en lugar de stroke-width usa strokeWidth. Dado que class es una palabra reservada, en React escribes className en su lugar, con el nombre de la propiedad DOM correspondiente.

¡Convertir todos estos atributos en el marcado existente puede ser tedioso! Recomendamos usar un convertidor para traducir su HTML y SVG existente a JSX. Los convertidores son muy útiles en la práctica, pero aun así vale la pena entender lo que sucede así puedes escribir JSX cómodamente por tu cuenta. Recomendamos:

```https://transform.tools/html-to-jsx```

### Integrar React CDN

Para usar React en su proyecto, puede cargar dos scripts de React desde un sitio web externo llamado unpkg.com :

    react: es la biblioteca central de React.
    react-dom: proporciona métodos específicos de DOM que le permiten utilizar React con el DOM.

```https://unpkg.com/react@17/umd/react.development.js```

```https://unpkg.com/react-dom@17/umd/react-dom.development.js```

En lugar de manipular directamente el DOM con JavaScript simple, puedes usar el método ReactDOM.render() de react-dom, para indicarle a React que represente nuestro título <h1> dentro de nuestro elemento #app.

Pero si intentas ejecutar este código en el navegador, obtendrás un error de sintaxis

Esto se debe a ```<h1>...</h1>```que Javascript no es válido. Este fragmento de código es JSX.

### Babel cual es su utilidad

Tenga en cuenta que los navegadores no entienden JSX de fábrica, por lo que necesitará un compilador de JavaScript, como Babel , para transformar su código JSX en JavaScript normal.

Para agregar Babel a su proyecto, copie y pegue el script de babel en la pagina oficial en su archivo index.html

Además, deberá informar a Babel qué código transformar cambiando el tipo de script a ```type=text/jsx```.

## Frameworks para React

Si deseas crear una nueva aplicación o un nuevo sitio web completamente con React, te recomendamos que elijas uno de los frameworks hechos con React más populares en la comunidad. Los frameworks brindan funciones que la mayoría de las aplicaciones y los sitios eventualmente necesitan, incluido el enrutamiento, la obtención de datos y la generación de HTML.

Next.js es un framework de React muy completo. Es versátil y te permite crear aplicaciones React de cualquier tamaño, desde un blog estático hasta una aplicación dinámica compleja. Para crear un nuevo proyecto Next.js, ejecuta en tu terminal:

npx create-next-app

Next.js es mantenido por Vercel. Puedes implementar una aplicación Next.js en cualquier alojamiento Node.js, sin servidor, o en tu propio servidor. Las aplicaciones Next.js estáticas se pueden implementar en cualquier alojamiento estático.

Remix es un framework de React muy completo con enrutamiento anidado. Te permite dividir tu aplicación en partes anidadas que pueden cargar datos en paralelo y actualizarse en respuesta a las acciones del usuario. Para crear un nuevo proyecto Remix, ejecuta:

npx create-remix

Remix es mantenido por Shopify. Cuando creas un proyecto Remix, debes elegir su destino de implementación. Puedes implementar una aplicación Remix en cualquier ambiente Node.js, alojamiento sin servidor usando o escribiendo un adaptador.

Gatsby es un framework de React para sitios web rápidos respaldados por un CMS. Su ecosistema es rico en complementos y su capa de datos GraphQL simplifica la integración de contenido, API y servicios en un sitio web. Para crear un nuevo proyecto de Gatsby, ejecuta:

npx create-gatsby

Gatsby es mantenido por Netlify. Puedes implementar un sitio estático de Gatsby en cualquier alojamiento estático. Si optas por usar funciones solo del servidor, asegúrate de que tu proveedor de alojamiento las admita para Gatsby

### Next ¿Por Que?

Para crear una aplicación web completa con React desde cero, hay muchos detalles importantes que debes considerar:

    El código debe agruparse mediante un paquete como webpack y transformarse mediante un compilador como Babel.
    Debe realizar optimizaciones de producción, como la división de código.
    Es posible que desee renderizar previamente estáticamente algunas páginas para mejorar el rendimiento y el SEO. Es posible que también desee utilizar la representación del lado del servidor o la representación del lado del cliente.
    Es posible que tengas que escribir algún código del lado del servidor para conectar tu aplicación React a tu almacén de datos.

Un framework puede resolver estos problemas. Pero un framework así debe tener el nivel adecuado de abstracción; de lo contrario, no será muy útil. También debe tener una excelente "Experiencia de desarrollador", lo que garantiza que se tenga una experiencia increíble al escribir código.

Next.js proporciona una solución a todos los problemas anteriores. Pero lo más importante es que los coloca a usted y a su equipo en el pozo del éxito al crear aplicaciones React.

Next.js tiene como objetivo brindar la mejor experiencia de desarrollador de su clase y muchas funciones integradas, como:

    Un sistema de enrutamiento intuitivo basado en páginas (con soporte para rutas dinámicas )
    Representación previa , tanto la generación estática (SSG) como la representación del lado del servidor (SSR) son compatibles por página.
    División automática de código para cargas de página más rápidas
    Enrutamiento del lado del cliente con captación previa optimizada
    Compatibilidad integrada con CSS y Sass , y compatibilidad con cualquier biblioteca CSS-in-JS
    Entorno de desarrollo con soporte de actualización rápida
    Rutas API para crear puntos finales API con funciones sin servidor
    Totalmente extensible

Next.js se utiliza en decenas de miles de sitios web y aplicaciones web de producción, incluidas muchas de las marcas más importantes del mundo.