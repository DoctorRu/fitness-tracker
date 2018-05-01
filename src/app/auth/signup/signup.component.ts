import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from "@ngrx/store";

import {AuthService} from '../auth.service';
import {UIService} from "../../shared/ui.service";
import * as fromRoot from '../../app.reducer';
import {Observable} from "rxjs/Observable";


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: [ './signup.component.css' ]
})

export class SignupComponent implements OnInit {
    minDate;
    maxDate;
    
    isLoading$: Observable<boolean>;
    
    constructor(private authService: AuthService,
                private uiService: UIService,
                private store: Store<fromRoot.State>) {
    }
    
    ngOnInit() {
        this.isLoading$ = this.store.select(fromRoot.getIsLoading);
        
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setFullYear('1960');
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }

    onSubmit(form: NgForm) {
        this.authService.registerUser({
            email: form.value.email,
            password: form.value.password
        });
        
    }
    
}
