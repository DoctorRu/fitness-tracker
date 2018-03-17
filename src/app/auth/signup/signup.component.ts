import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
    minDate;
    maxDate;

    constructor() {
    }

    ngOnInit() {
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setFullYear('1990');
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }

    onSubmit(form: NgForm) {
        console.log(form.value);

    }

}
