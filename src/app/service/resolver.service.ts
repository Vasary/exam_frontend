import {Injectable} from '@angular/core';
import {CoreClientService} from './core.client.service';
import {AppState} from '../app.state.service';
import {Router} from '@angular/router';

@Injectable()
export class ResolverService {

    private client: CoreClientService;
    private global: AppState;
    private router: Router;

    constructor(client: CoreClientService, global: AppState, router: Router) {
        this.client = client;
        this.global = global;
        this.router = router;
    }

    resolve(result: object) {
        console.log(result);

        if (result.action['action'] == 1) {
            this.router.navigate(['/welcome']);
        }

        if (result.action['action'] == 2) {
            this.router.navigate(['/quiz']);
        }

        if (result.action['action'] == 3) {
            this.router.navigate(['/quiz']);
        }

        if (result.action['action'] == 4) {
            this.router.navigate(['/quiz/result']);
        }

        if (result.action['action'] == 5) {
            this.router.navigate(['/logout']);
        }
    }
}
