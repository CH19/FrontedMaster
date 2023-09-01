# Vue 
## Clase 1 
### ¿Que es VUE?
Vue es un framework de JavaScript para construir interfaces de usuario. Se basa en HTML, CSS y JavaScript estándar y proporciona un modelo de programación declarativo y basado en componentes que lo ayuda a desarrollar interfaces de usuario de manera eficiente, ya sean simples o complejas.

Las dos características principales de Vue:

**Representación declarativa:** Vue amplía HTML estándar con una sintaxis de plantilla (template) que nos permite describir declarativamente la salida HTML en función del estado de JavaScript.
**Reactividad:** Vue rastrea automáticamente los cambios de estado de JavaScript y actualiza de manera eficiente el DOM cuando ocurren cambios.

Para crear una aplicación en VUE usaremos Vite que es un empaquetdor de paquetes podemos crear una plantilla que ya tenga el framework vue instalado con el comando 
```npm init vue@latest```

Este comando instalará y ejecutará create-vue , la herramienta oficial de andamiaje del proyecto Vue. Se le presentarán indicaciones para varias funciones opcionales, como TypeScript y compatibilidad con pruebas:

Al terminar, Vue creará una carpeta para el proyecto con el nombre indicado. En esta carpeta estarán los archivos y carpetas mostrados en la siguiente imagen. El componente principal se llama App.vue (se explicara en detalle la lógica de componentes más adelante en este curso).

Creación de Vue con **CDN**

Puede usar Vue directamente desde un CDN a través de una etiqueta de secuencia de comandos:

```html
<script src="https//unpkg.com/vue@3/dist/vue.global.js"></script>
```

Aquí estamos usando unpkg, pero también puede usar cualquier CDN que sirva paquetes npm, por ejemplo, jsdelivr o cdnjs. Por supuesto, también puede descargar este archivo y hacer referencia a éste localmente.

Cuando se usa Vue desde un CDN, no hay un "paso de compilación" involucrado. Esto hace que la configuración sea mucho más simple y es adecuado para mejorar HTML estático para integrarse con un framework de backend. Sin embargo, no podrá utilizar la sintaxis de componente de archivo único "Single-File Components" (SFC).

**tipos de API**

Vue tiene dos estilos de API para el trabajo, así los componentes de Vue se pueden crear en dos estilos de API diferentes:

Options API (API de opciones)
API de opcciones
Con la API de opciones, definimos la lógica de un componente usando un objeto de opciones como data, methods y mounted. Las propiedades definidas por opciones se exponen en funciones internas this, que apuntan a la instancia del componente

Composition API (API de composición)

Con la API de composición, definimos la lógica de un componente utilizando funciones API importadas. La API de composición se usa normalmente con 

```html
<script setup>
```

El atributo setup es una pista que hace que Vue realice transformaciones en tiempo de compilación que nos permiten usar la API de composición con menos repeticiones.

Por ejemplo, las importaciones y las variables y/o funciones declaradas en nivel superior en el 

```html 
<script setup>
``` 

se pueden usar directamente en la plantilla.

# Interpolación de datos
La característica principal de Vue es la representación declarativa. Al usar una sintaxis de plantilla que extiende HTML, podemos describir cómo debería verse el HTML en función del estado de JavaScript. Cuando cambia el estado, el HTML se actualiza automáticamente.

Los estados que pueden desencadenar actualizaciones cuando se modifican se consideran reactivos. Podemos declarar el estado reactivo usando la API de Vue -> reactive(). Los objetos creados a partir de Proxies JavaScript reactive(), funcionan como objetos normales:

reactive() solo funciona en objetos (incluidos arreglos y tipos integrados como Map y Set).


Ejemplo de un objeto creado con reactive

2.2. Interpolacion de Datos 2 (Ref)
ref(), por otro lado, puede tomar cualquier tipo de valor y crear un objeto que expone el valor interno bajo una propiedad .value:


Ejemplo de una variable reactiva con ref

El estado reactivo declarado en el bloque 
```html
<script setup> 
```
del componente se puede utilizar directamente en la plantilla. Así es como podemos representar texto dinámico en función del valor del objeto counter y la referencia message, utilizando la sintaxis {{}} para renderizar:


Uso de la interpolación {{ }}

Observe cómo no necesitábamos usar al acceder a .value de la referencia message en las plantillas: se desenvuelve automáticamente para un uso más sucinto.

El contenido dentro de las dobles llaves {{ }} no se limita solo a identificadores o rutas; podemos usar cualquier expresión de JavaScript válida:
```html
<h1>{{ message.split(´´).reverse().join(´´) }}</h1>
```