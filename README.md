### Subscriptions Tracker
Este proyecto es una aplicación web para realizar un seguimiento de tus suscripciones a servicios como Netflix, Disney Plus, Spotify y más. Puedes establecer un presupuesto, agregar tus suscripciones y ver cuánto has gastado en total.

Link: [subcription-tailwind-material-react.vercel.app](https://subcription-tailwind-material-react.vercel.app/)

### Funcionalidades
## 1. Agregar Presupuesto
En la página de inicio, puedes ingresar tu presupuesto inicial. Si el presupuesto es válido (mayor o igual a cero), se habilitará la funcionalidad de agregar suscripciones.

## 2. Agregar Suscripciones
Una vez que tengas un presupuesto válido, puedes agregar tus suscripciones. Para cada suscripción, debes especificar el tipo de servicio (por ejemplo, Netflix) y el precio mensual. Si el precio es válido y no excede tu presupuesto disponible, la suscripción se agregará a la lista.

## 3. Ver Balance
En la sección de balance, puedes ver la siguiente información:

Presupuesto: El presupuesto inicial que ingresaste.
Disponible: Cuánto dinero te queda después de restar el gasto en suscripciones.
Gastado: La suma total de tus suscripciones.

### Componentes
## 1. Header
La barra de navegación superior que muestra el título de la aplicación (“Subscriptions Tracker”).

## 2. FormMoney
Este componente permite ingresar el presupuesto inicial. Si el presupuesto es válido, se habilita la funcionalidad para agregar suscripciones.

## 3. Main
Aquí se encuentran las funcionalidades principales:

Agregar suscripciones.
Ver el balance.

## 4. Balance
Muestra el presupuesto, el dinero disponible y el gasto total.

## 5. SingleItem
Representa una suscripción individual en la lista. Muestra el tipo de servicio, el precio y ofrece opciones para editar o eliminar la suscripción.

### Tecnologías Utilizadas
-- React: Biblioteca de JavaScript para construir interfaces de usuario.
-- Material-UI: Framework de componentes de React basado en Material Design.
-- Tailwind CSS: Framework de utilidades CSS para estilizar los componentes.
-- Despliegue en Vercel