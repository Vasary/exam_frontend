import { Injectable } from '@angular/core';
import { CoreClientService } from './core.client.service';
import { AppState } from '../app.state.service';
import { Router } from '@angular/router';

@Injectable()
export class ResolverService {
    private client: CoreClientService;
    private global: AppState;
    private router: Router;
    private map: Map<number, string>;

    constructor(client: CoreClientService, global: AppState, router: Router) {
        this.client = client;
        this.global = global;
        this.router = router;
        this.map = new Map();

        this.map.set(1, '/welcome');
        this.map.set(2, '/quiz/spawn');
        this.map.set(3, '/quiz');
        this.map.set(4, '/quiz/result');
        this.map.set(5, '/logout');
    }

    resolve(result: object) {
        if (result && result.hasOwnProperty('action')) {
            const action = this.map.get(result['action']) || '/about';

            this.router.navigate([action]);
        }
    }
}
