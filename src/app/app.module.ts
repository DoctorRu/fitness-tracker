import 'hammerjs';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './auth/training/training.component';
import {CurrentComponent} from './training/current/current.component';
import {NewTrainingComponent} from './training/new-training/new-training.component';
import {PastTrainingComponent} from './training/past-training/past-training.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AppRoutingModule} from './app-routing.module'; // Must be imported after BrowserModule


@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LoginComponent,
        TrainingComponent,
        CurrentComponent,
        NewTrainingComponent,
        PastTrainingComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}