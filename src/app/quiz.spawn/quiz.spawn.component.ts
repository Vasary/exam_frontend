import {Component, OnInit} from '@angular/core';
import {CoreClientService} from '../service/core.client.service';
import {ResolverService} from '../service/resolver.service';

@Component({
    selector: 'app-quiz.spawn',
    templateUrl: './quiz.spawn.component.html',
    styleUrls: ['./quiz.spawn.component.css']
})
export class QuizSpawnComponent implements OnInit {
    private service: CoreClientService;
    private resolver: ResolverService;

    constructor(service: CoreClientService, resolver: ResolverService) {
        this.service = service;
        this.resolver = resolver;
    }

    ngOnInit() {
        this.service.get('/gateway').subscribe(
            (result) => {
                this.resolver.resolve(result['next'])
            }
        )
    }
}
