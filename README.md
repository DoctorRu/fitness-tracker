# FitnessTracker

## An Angular 5 + Rxjs + Firebase to track your fitness life.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Screenshots
![alt tag](https://raw.githubusercontent.com/DoctorRu/fitness-tracker/master/screenshots/01.jpg)
![alt tag](https://raw.githubusercontent.com/DoctorRu/fitness-tracker/master/screenshots/02.jpg)
![alt tag](https://raw.githubusercontent.com/DoctorRu/fitness-tracker/master/screenshots/03.jpg)
![alt tag](https://raw.githubusercontent.com/DoctorRu/fitness-tracker/master/screenshots/04.jpg)


## Live: https://fitness-project-876cb.firebaseapp.com

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## AngularFire2

Create the file

/src/environment/environment.ts

and copy/paste the credentials from your firebase project, you will find it in
Project overview -> Add Firebase to your web app

https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md

    
    export const environment = {
      production: false,
      firebase: {
        apiKey: '<your-key>',
        authDomain: '<your-project-authdomain>',
        databaseURL: '<your-database-URL>',
        projectId: '<your-project-id>',
        storageBucket: '<your-storage-bucket>',
        messagingSenderId: '<your-messaging-sender-id>'
      }
    };


## Temas para revisão
    loadChildren (referente a rotas)
     ref:   app-routing.module.ts

    CanLoad, CanActivate
    ref: auth.guard.ts