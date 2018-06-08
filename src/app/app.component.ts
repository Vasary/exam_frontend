import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppState} from './app.state.service';
import {NavigationEnd, NavigationStart, NavigationCancel, Router} from '@angular/router';
import {User} from './models';
import {ResolverService} from './service/resolver.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
    private title = null;
    private state: AppState;
    private router: Router;
    private loading: boolean;
    private resolver: ResolverService;

    constructor(globals: AppState, router: Router, resolver: ResolverService) {
        this.state = globals;
        this.title = 'Система тестирования';
        this.router = router;
        this.loading = true;
        this.resolver = resolver;
    }

    async logout(): void {
        await localStorage.removeItem('token');
        this.state.user = null;

        await this.updateState();
    }

    async ngOnInit() {
        await this.updateState()
    }

    async updateState(): void {
        this.loading = true;

        try {
            let result = await this.state.update();

            let user = new User();
            user.name = result['profile']['first_name'];
            user.surname = result['profile']['second_name'];
            user.patronymic = result['profile']['last_name'];

            this.state.user = user;

            if (result.hasOwnProperty('scenario')) {
                this.resolver.resolve(result.scenario);
            }
        } catch (e) {
            this.router.navigate(['/register']);
        }

        this.loading = false;
    }

    ngAfterViewInit() {
    }
}
