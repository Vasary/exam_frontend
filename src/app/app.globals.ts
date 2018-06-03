import {Injectable} from '@angular/core';
import {User} from './models';

@Injectable()
export class AppGlobals {
    public user: User;

    isLogged(): boolean {
        return null !== localStorage.getItem('token');
    }
}
