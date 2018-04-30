import {NgModule} from "@angular/core";
import {TrainingComponent} from "./training.component";
import {PastTrainingComponent} from "./past-training/past-training.component";
import {CurrentTrainingComponent} from "./current-training/current-training.component";
import {StopTrainingComponent} from "./current-training/stop-training.component";
import {NewTrainingComponent} from "./new-training/new-training.component";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        TrainingComponent,
        NewTrainingComponent,
        CurrentTrainingComponent,
        PastTrainingComponent,
        StopTrainingComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        AngularFirestoreModule,
        FormsModule
    ],
    exports: []
    
})

export class TrainingModule {

}