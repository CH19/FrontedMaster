# Clase1 de JS
---
## Objetivos de este nivel
- [ ] Conocer AJAX.
- [ ] Utilizar las funciones JQUERY para trabajar con AJAX
- [ ] Aprender a usar promesas.
- [ ] Aprender Servicios rest.
- [ ] Realizar Operaciones Crud con Backend

## Conociendo HTTP
### Arquitectura cliente Servidor
Para que una aplicación web funcione debe de estar almacenada en un servidor, este modelo decribe el comportamiento entre un servidor y la presencia de los clientes, generalemente funciona con la presencia de un servidor y muchos clientes 

Los clientes son las diversas pantallas que tenemos, es lo que hacemos en el frotned. El servidor es aquello en donde se guarda y se almacena nuestra aplicación asi como sus datos. La comunicación entre el cliente y el servidor se llama protocolo y es algo que define el servidor, el cliente interpreta y usa el protocolo. El protocolo para transferencia en la web se llama **HTTP** (Hyper Text Transform Protocol).

En la interacción cliente/servidor el cliente hace las peticiones mediante **Request** y el servidor responde con **Response** que es la respuesta, el cliente tanto el sevidor pueden enviar datos y recibirlos, a través del 

Estructura de una url
[EStrucutra url](https://superadmin.es/blog/que-es/direccion-web-url/#:~:text=El%20formato%20de%20una%20URL,para%20escribir%20una%20direcci%C3%B3n%20conocida.)

**HTTP**: Protocolo

**www.google.com**: dominio

**/search**: recurso

### Metodos HTTP
HTTP tiene sus metodos para interactuar con los elementos del servidor, estos son: 
- Get: Se utiliza para solicitar un archivo o recurso que se encuentra en el servior
- Options: Representa una solicitud de informacion  acerca de las opcciones de comunicación disponibles en el canal de solicitud/respuesta (dice cuales metodos estan disponibles)
- Post: se usa para enviar información al servidor
- PUT: se utiliza para enviar información al servidor
- Delete: se utiliza para eliminar alguna información al servidor (el delete generalmente no se utiliza)

El metodo más común de utilizar es el metodo Get

### Codigos de Respuesta
- Respuestas informativas: 100-199
- Respuestas satisfactorias: 200-299
- Redirecciones: 300-399
- Errores de los clientes: 400-499
- Errores de los servidores: 500-599
---
API
Aplication Programing Interface, significa interaz de programación de aplicaciones, es un termino genercio para refererise a una forma de conectarse con algo para programar aplicaciones, se pueden definir que las apis son interfaces

**Interfaz**: se puede definir una interfaz como un intermediario para conectar dos cosas, un enchufe puede ser una interfaz porque conecta la electricidad con objetos especificos, una API, etc

Por lo tanto una API web se puede definir como lo que tiene eso con los datos 

Usuario >> Interactua con el aparato >> Aplicación cliente >> Aplicacion Fronted >> Conexion de Usuario web con servidor web >> conexión con la API

Las API permiten la conexion de un dispositivo a un servidor, eso hace la vida mas facil al programador, puesto que se puede programar un API utilizar esa API para las diversas pantallas
## APi Key

Es lo que te permite o no hacer acciones que intervengan con la Api

## API rest

Es la relación entre las APi y las bases de datos