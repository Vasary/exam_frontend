import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
     * @return {object}
     */
    static postHeaders(): object {
        const map = new Map();
        let headers = new HttpHeaders();

        map.set('Content-Type', 'application/x-www-form-urlencoded');

        if (null !== localStorage.getItem('token')) {
            map.set('Token', localStorage.getItem('token'));
        }

        map.forEach(function (value: string, header: string) {
            headers = headers.set(header, value);
        });

        return {headers: headers};
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

    /**
     * @param {string} url
     * @param {object} data
     * @returns {Observable<Object>}
     */
    post(url: string, data: object) {
        return this.http.post(environment.core + url, data.toString(), CoreClientService.postHeaders());
    }

    /**
     * @param {string} url
     * @returns {Observable<Object>}
     */
    get(url: string) {
        return this.http.get(environment.core + url, CoreClientService.getHeaders());
    }
}
