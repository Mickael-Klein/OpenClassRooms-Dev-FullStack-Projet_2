# OlympicGamesStarter

The `Olympic Games app` is an Angular application that allows clients to view two pages of information about the Olympic Games. It features a homepage presenting general stats of different countries and a country page that provides more in-depth information about a specific chosen country.

## App Information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

The chart library used to display charts in this project is `ngx-charts` version 20.4.1.

Don't forget to install your node_modules before starting (`npm install`).

## Development Server

To run a development server, use `ng serve`. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Where to Start

An architecture has already been defined for the project. If you want to modify this project, feel free to use your own architecture. The structure includes:

- `components` folder: contains reusable components
- `pages` folder: contains components used for routing
- `core` folder: contains the business logic (`services` and `models` folders)
- `assets` folder: contains mock data and SCSS variables for styling.

This is a Single Page Application (SPA), and the routing is configured in the `app-routing.module.ts` file to handle navigation and display different components based on the URL paths. HTTP communications and data dispatch logic are handled by `core/services/olympics.service.ts`. Model classes are defined in `core/models`.

## Project Architecture

```
├───app
│ ├───components
│ │ ├───back-home-arrow
│ │ ├───header
│ │ ├───info-container
│ │ ├───line-chart-container
│ │ ├───loader
│ │ ├───pie-chart-container
│ │ └───title-container
│ ├───core
│ │ ├───models
│ │ └───services
│ └───pages
│ ├───country
│ ├───home
│ └───not-found
├───assets
│ ├───mock
│ └───Style
└───environments
```
