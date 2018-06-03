import {Injectable} from '@angular/core';
import {User} from './models';

@Injectable()
export class AppGlobals {
    private _user: User;

    public active: boolean = false;

    public constructor() {
        this.updateActive()
    }

    set user(user: User) {
        this._user = user;

        this.updateActive();
    }

    updateActive(): void {
        if (null !== localStorage.getItem('token')) {
            this.active = true;
        } else {
            this.active = false;
        }
    }
}
