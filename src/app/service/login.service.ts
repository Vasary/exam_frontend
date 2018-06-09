import {Injectable} from '@angular/core';
import {CoreClientService} from './core.client.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../models';
import {AppState} from '../app.state.service';
import {ResolverService} from './resolver.service';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {
    private service: CoreClientService;
    private state: AppState;
    private router: Router;
    private resolver: ResolverService;

    /**
     * @param {CoreClientService} coreClient
     * @param {AppState} appState
     * @param {Router} router
     * @param {ResolverService} resolver
     */
    constructor(coreClient: CoreClientService, appState: AppState, router: Router, resolver: ResolverService) {
        this.service = coreClient;
        this.state = appState;
        this.resolver = resolver;
        this.router = router;
    }

    /**
     * @param {string} login
     * @param {string} password
     * @returns {Observable<Object>}
     */
    login(login: string, password: string): Observable<object> {
        const formData = new FormData();

        formData.append('login', login);
        formData.append('password', password);

        return this.service.post('/login', formData);
    }

    async logout() {
        await localStorage.removeItem('token');
        this.state.user = null;

        await this.updateState();
    }

    async updateState() {
        try {
            let result = await this.state.update();
            let user = new User();

            user.name = result['profile']['first_name'];
            user.surname = result['profile']['second_name'];
            user.patronymic = result['profile']['last_name'];

            this.state.user = user;

            if (result.hasOwnProperty('current')) {
                this.resolver.resolve(result['current']);
            }
        } catch (e) {
            this.router.navigate(['/register']);
            this.state.user = null;
        }
    }
}
