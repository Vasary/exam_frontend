import {Injectable} from '@angular/core';
import {User} from './models';
import {CoreClientService} from './service/core.client.service';

@Injectable()
export class AppState {
    private _user: User;
    private logged: boolean;
    private service: CoreClientService;

    public constructor(core: CoreClientService) {
        this.logged = false;
        this.service = core;
    }

    set user(user: User) {
        if (null !== user) {
            this._user = user;
            this.updateActive();
        }
    }

    update(): Promise<object> {
        return this.service.get('/tools').toPromise();
    }

    getProfile(): string {
        if (null !== this._user) {
            return this._user.surname + ' ' + this._user.name + ' ' + this._user.patronymic;
        }

        return '';
    }

    isLogged(): boolean {
        return this.logged;
    }

    updateActive(): void {
        this.logged = null !== localStorage.getItem('token');
    }
}
