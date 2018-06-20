import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
    private service: LoginService;

    constructor(service: LoginService) {
        this.service = service;
    }

    async ngOnInit() {
        await this.service.logout();
    }
}
