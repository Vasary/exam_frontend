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

    getProfile(): string {
        if (null !== this._user) {
            return this._user.surname + ' ' + this._user.name + ' ' + this._user.patronymic;
        }

        return '';
    }

    updateActive(): void {
        this.active = null !== localStorage.getItem('token');
    }
}
