import { Component } from '@angular/core';
import {AppGlobals} from './app.globals';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = null;

  private globals: AppGlobals;
  private router: Router;

  constructor(globals: AppGlobals, router: Router) {
      this.globals = globals;
      this.title = 'Система тестирования';
      this.router = router;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.globals.user = null;
    this.globals.updateActive();

    this.router.navigate(['/about']);
  }
}
