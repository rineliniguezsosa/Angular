# Angular Homes

#### Este es un proyecto inicial para aprender el frameWork Angular

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js: [https://nodejs.org](https://nodejs.org)
- Angular CLI: Ejecuta el siguiente comando en tu terminal para instalarlo de forma global:

```shell
npm install -g @angular/cli
```

## Configuración del Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. Clona este repositorio en tu máquina local:

```shell
git clone https://github.com/rineliniguezsosa/Angular.git
```

2. Navega al directorio del proyecto:

```shell
cd angular-playground
```

3. Instala las dependencias del proyecto:

```shell
npm install
```

## Ejecutar el Proyecto

```shell
ng serve
```

## Terminologia angular

- Modulo(uno ó más componentes y servicios)
- components(HTML + class)
- services(logica de negocio)
- Modulos(interactuan y ultimadamente renderizan la vista en el navegador)

## Components

cada componente en angular consiste en:

- Template(HTML)
- Class(Typescript, información y métodos)
- CSS(usado para el template)

la mejor forma de crear un componente es con angular cli

```shell
ng generate component <component-name>
```

## Crea una interfaz typescript mediante angular cli

```shell
ng generate interface <nombre-interfaz>
```

## Entradas

Las entradas permiten que los componentes compartan datos. La dirección del intercambio de datos es del componente principal al componente secundario.

#### Para recibir datos de un componente principal, un componente secundario debe utilizar un decorador especial 

>@Input

**La propiedad de entrada está vinculada a una propiedad DOM en la plantilla. Durante la detección de cambios, Angular actualiza automáticamente la propiedad de datos con el valor de la propiedad DOM.**

## Propiedades vinculadas

Una propiedad se vincula con el DOM

[Consulta la lista de propiedades DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

## Interpolation

La interpolación es simplemente vincular información de una clase a un template

## Directiva ngFor

se usa para repetir dinámicamente datos en una plantilla.(for:ngFor)

## Servicios

Los servicios de Angular le brindan una forma de separar los datos y las funciones de la aplicación de Angular que pueden usar varios componentes de su aplicación. Para ser utilizado por múltiples componentes, un servicio debe ser **inyectable** . Los servicios que son inyectables y utilizados por un componente se convierten en dependencias de ese componente. El componente depende de esos servicios y no puede funcionar sin ellos.

```shell
ng generate service <nombre-de-servicio>
```

## inject function

La función inject permite pasar información ó funcionalidad de los servicios entre los componentes

## Angular router

### ProvideRouter 

Habilita la funcionalidad de Router en la aplicación, permite configurar un conjunto de rutas

### RouterModule(Routes-React)

Configuramos y gestionamos la rutas en Angular router

#### Métodos de configuración

**forRoot**: es un método utilizado para configurar las rutas principales, toma un arreglo de rutas definidas

### Routes(Route-React)

Definimos la configuración de rutas de la aplicación,la clase Routes proporciona una estructura para definir la rutas

**Ejemplo de como configurar una ruta**
```typescript
import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
 
export const Approuter : Routes = [
    {
        path: 'detalles',
        component: DetailsComponent,
        title: 'Detalles'
    }

```
**path**: es la ruta por la cual accederemos al template<br>
**component**: es la referencia de la clase por la cual accederemos al template(html) cuando la ruta coincida con la busqueda<br>
**title**: es el titulo para asociar con la pagina
### routerLink(Link-React)

Nos permite navegar hacia la ruta donde mostraremos el contenido html ó template,routerLink es un enlace

**en angular routerLink se define como una directiva**

```html
<a [routerLink]="['/home']">Home</a>
```

### Directiva router-outlet

Esta directiva se encargara de mostrar el contenido de los componentes correspondientes a las rutas definidas, además permite manejar las rutas aninadas como el componente **Outlet** de Reactjs

```html
<router-outlet></router-outlet>
```

### Acceso a parámetros

#### ActivatedRoute

Brinda acceso a información sobre una ruta asociada a un componente 

[Observa la lista de propiedades que se pueden extraer mediante ActivatedRoute](https://next.angular.io/api/router/ActivatedRoute#description)

**ActivatedRoute es una clase de angular el cual ya tiene soporte de inyección de dependencias**

## Angular Forms