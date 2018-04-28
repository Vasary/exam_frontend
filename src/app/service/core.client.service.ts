import { Injectable } from '@angular/core';
import { HttpClient, Response } from "@angular/common/http";

@Injectable()
export class CoreClientService {
    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    post(url: string): Promise<number> {
        return new Promise(() => {
            this.http.get(url)
        });
    }
}
