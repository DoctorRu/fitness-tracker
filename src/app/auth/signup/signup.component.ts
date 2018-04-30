import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from "rxjs/Subscription";
import {AuthService} from '../auth.service';
import {UIService} from "../../shared/ui.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: [ './signup.component.css' ]
})

export class SignupComponent implements OnInit, OnDestroy {
    minDate;
    maxDate;
    
    isLoading = false;
    private loadingSubs: Subscription;
    
    
    constructor(private authService: AuthService,
                private uiService: UIService) {
    }
    
    ngOnInit() {
        this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
            this.isLoading = isLoading;
        });
        
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setFullYear('1960');
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }
    
    ngOnDestroy() {
        if (this.loadingSubs) {
            this.loadingSubs.unsubscribe();
        }
    }
    
    onSubmit(form: NgForm) {
        this.authService.registerUser({
            email: form.value.email,
            password: form.value.password
        });
        
    }
    
}
