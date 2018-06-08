import {Component, OnInit} from '@angular/core';
import {ResolverService} from '../service/resolver.service';
import {CoreClientService} from '../service/core.client.service';

@Component({
    selector: 'app-resolver',
    templateUrl: './resolver.component.html',
    styleUrls: ['./resolver.component.css']
})
export class ResolverComponent implements OnInit {

    private resolver: ResolverService;
    private client: CoreClientService;

    constructor(resolver: ResolverService, client: CoreClientService) {
        this.resolver = resolver;
        this.client = client;
    }

    resolve() {
        this.resolver.resolve();
    }

    ngOnInit() {
        this.resolve();
    }
}
