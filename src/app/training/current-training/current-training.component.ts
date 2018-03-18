import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-current-training',
    templateUrl: './current-training.component.html',
    styleUrls: [ './current-training.component.css' ]
})
export class CurrentTrainingComponent implements OnInit {
    
    progress = 0;
    timer: number;
    
    constructor() {
    }
    
    ngOnInit() {
        this.timer = window.setInterval(() => {
            this.progress += 10;
            if (this.progress >= 100) {
                clearInterval(this.timer); // Dont inport it from intervals! Just use it here
            }
        }, 1000);
    }
    
    onStop() {
        clearInterval(this.timer);
    }
    
}
