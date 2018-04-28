import { Injectable } from '@angular/core';
import { CoreClientService } from "./core.client.service";
import { User } from "../models";

@Injectable()
export class RegistrationService {

    private service: CoreClientService;

    constructor(coreClient: CoreClientService) {
        this.service = coreClient;
    }

    register(user: User) {
        console.log(this.service.post('http://localhost:8000').then(
            res => {
                console.log(1);
            },
            err => {
                console.log(2);
            }
        ))
    }
}
