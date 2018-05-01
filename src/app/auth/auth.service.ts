import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {AngularFireAuth} from 'angularfire2/auth';
import {Store} from "@ngrx/store";
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';

import {AuthData} from './auth-data.model';
import {TrainingService} from '../training/training.service';
import {UIService} from '../shared/ui.service';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;
    
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth,
        private trainingService: TrainingService,
        private uiService: UIService,
        private store: Store<{ui: fromRoot.State}>) {
    }
    
    initAuthListener() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate([ '/training' ]);
            } else {
                this.trainingService.cancelSubscriptions();
                this.authChange.next(false);
                this.router.navigate([ '/login' ]);
                this.isAuthenticated = false;
            }
        });
    }
    
    registerUser(authData: AuthData) {
        // this.uiService.loadingStateChanged.next(true);
        // this.store.dispatch({type: 'START_LOADING'}); // Does the same as the line above but using redux;
        this.store.dispatch(new UI.StartLoading()); // Does the same as the line above but using redux;
        
        this.afAuth.auth
            .createUserWithEmailAndPassword(authData.email, authData.password)
            .then(() => {
                // this.uiService.loadingStateChanged.next(false);
                this.store.dispatch(new UI.StopLoading()); // Does the same as the line above but using redux;
            })
            .catch(error => {
                // this.uiService.loadingStateChanged.next(false);
                this.store.dispatch(new UI.StopLoading()); // Does the same as the line above but using redux;
                this.uiService.showSnackBar(error.message, null, 3000);
            });
    }
    
    login(authData: AuthData) {
        // this.uiService.loadingStateChanged.next(true);
        this.store.dispatch(new UI.StartLoading()); // Does the same as the line above but using redux;
        this.afAuth.auth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                // this.uiService.loadingStateChanged.next(false);
                this.store.dispatch(new UI.StopLoading()); // Does the same as the line above but using redux;
            })
            .catch(error => {
                // this.uiService.loadingStateChanged.next(false);
                this.store.dispatch(new UI.StopLoading()); // Does the same as the line above but using redux;
                this.uiService.showSnackBar(error.message, null, 3000);
            });
    }
    
    logout() {
        this.afAuth.auth.signOut();
    }
    
    isAuth() {
        return this.isAuthenticated;
    }
}
