import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class LoggedGuard implements CanActivate {
    constructor(private location: Location) {
    }

    canActivate() {
        if (localStorage.getItem('token') === null) {
            return true;
        } else {
            this.location.back();
        }

        return false;
    }
}
