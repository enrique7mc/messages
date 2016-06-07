Pitch Time
=====================

Organiza los pitch de los equipos en un hackaton y ofrece una forma simple
de participación para los asistentes.

La aplicación está construida usando React JS para la capa de presentación
y [Firebase](https://firebase.google.com/) para el almacenamiento de datos y registro de usuarios.
Basada en la arquitectura Flux para coordinar el paso de información
entre componentes como consecuencia de un evento o interacción del usuario.
Además utiliza la última versión de JavaScript o EcmaScript 2015 que agrega
docenas de características muy útiles durante el proceso de desarrollo.

El desarrollo de una aplicación con React frecuentemente incluye el uso de
otras bibliotecas como Webpack y React Router para la implementación
de características no incluidas directamente en React JS.

### Demo del proyecto

Puedes acceder a la versión demo del proyecto en el siguiente [link](https://react-chat-ebab2.firebaseapp.com),
cortesía de Firebase Hosting.

Hay dos tipos de usuario
* Administrador: puede modificar los equipos participantes e iniciar el timer para los pitch correspondientes, además de añadir comentarios. Credenciales de acceso: user: `admin@admin.com` password: `S3cur3D#`
* Visitante: puede añadir comentarios a los equipos participantes y ver el timer en tiempo real, para ingresar es necesario usar el login con cuenta de **Google**. 

## TODO (pendientes)
* Añadir equipos desde la interfaz gráfica (actualmente es posible cargando un archivo `.json`)
* Añadir otras formas de autenticación
* Mejoras en el diseño

### Dependencias

* [React](https://facebook.github.io/react/)
* [Webpack](https://webpack.github.io/)
* [React Router](https://github.com/reactjs/react-router)
* [Alt](http://alt.js.org/)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Uso

Ejecutar de forma local con `npm`

```
npm install
npm start
open http://localhost:3000
```
