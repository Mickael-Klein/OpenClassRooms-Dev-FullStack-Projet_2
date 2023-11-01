# OlympicGamesStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

Don't forget to install your node_modules before starting (`npm install`).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Where to start

An architecture has already been defined for the project. in case you want to modify this project, feel free to modify it and to use your own. The architecture includes (in addition to the default angular architecture) the following:

- `components` folder: contains every reusable components
- `pages` folder: contains components used for routing
- `core` folder: contains the business logic (`services` and `models` folders)
- `assets` folder: contains mock datas and style scss variable.

This is a Single Page Application (SPA), and the routing is configured in the app-routing.module.ts file to handle navigation and display different components based on the URL paths.
The http communications and data dispatch logic are handle by `core/services/olympics.service.ts`.
Model classes are defined in `core/models`.
