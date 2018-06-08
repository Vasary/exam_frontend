import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CoreClientService {
    private http: HttpClient;

    /**
     * @param {HttpClient} http
     */
    constructor(http: HttpClient) {
        this.http = http;
    }

    /**
     * @param {string} url
     * @param {object} data
     * @returns {Observable<Object>}
     */
    post(url: string, data: object) {
        return this.http.post(environment.core +  url, data, CoreClientService.getHeaders());
    }

    /**
     * @param {string} url
     * @returns {Observable<Object>}
     */
    get(url: string) {
        return this.http.get(environment.core + url, CoreClientService.getHeaders());
    }

    /**
     * @returns {object}
     */
    static getHeaders(): object {
        if (null !== localStorage.getItem('token')) {
            return {
                headers: new HttpHeaders({'Token': localStorage.getItem('token')})
            };
        }

        return {};
    }
}
