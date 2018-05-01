import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";

import * as fromRoot from '../../app.reducer';
import {AuthService} from '../auth.service';
import {UIService} from "../../shared/ui.service";
import "rxjs/add/operator/map";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    isLoading$: Observable<boolean>;
    
    constructor(private authService: AuthService,
                private uiService: UIService,
                private  store: Store<{ ui: fromRoot.State }>) {
    }
    
    ngOnInit() {
        this.isLoading$ = this.store.select(fromRoot.getIsLoading);
      
        // this.loadingSubs = this.uiService.loadingStateChanged.subscribe(x => {
        //     this.isLoading = x;
        // });
        //
        this.loginForm = new FormGroup({
            email: new FormControl('', {
                validators: [ Validators.required, Validators.email ]
            }),
            password: new FormControl('', {validators: [ Validators.required ]})
        });
    }
    
    // It's not necessary to unsubscribe from ngrx stuff
    // ngOnDestroy() {
    //     if (this.loadingSubs) {
    //         this.loadingSubs.unsubscribe();
    //     }
    // }
    
    onSubmit() {
        this.authService.login({
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        });
    }
    
}
