import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';

import {User} from './signup/user.model';
import {AuthData} from './signup/auth-data.model';


@Injectable()

export class AuthService {
    
    authChange = new Subject<boolean>();
    private user: User;
    
    constructor(private router: Router) {
    
    }
    
    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        
        this.authChange.next(true);
        this.router.navigate(['/training']); // works like $location must be imported like them
    }
    
    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        
        this.authChange.next(true);
        this.router.navigate(['/training']);
        
    }
    
    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
        
    }
    
    getUser() {
        console.log('get user service');
        console.log('first');
        console.log(this.user);
        
        console.log('second');
        console.log({...this.user});
        
        return {...this.user};
    }
    
    isAuth() {
        return this.user != null;
    }
    
}
