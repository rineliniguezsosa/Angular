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


## Propiedades vinculadas

Una propiedad se vincula con el DOM

## Interpolation

La interpolación es simplemente vincular información de una clase a un template