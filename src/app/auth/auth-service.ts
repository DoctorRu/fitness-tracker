import { Subject } from 'rxjs/Subject';

import {User} from './signup/user.model';
import {AuthData} from './signup/auth-data.model';

export class AuthService {
    authChange = new Subject<boolean>();
    
    private user: User;
    
    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        
        this.authChange.next(true);
    }
    
    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
    
        this.authChange.next(true);
    
    }
    
    logout() {
        this.user = null;
        this.authChange.next(false);
    
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
