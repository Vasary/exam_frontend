import { Component } from '@angular/core';
import {AppGlobals} from './app.globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = null;

  private globals: AppGlobals;

  constructor(globals: AppGlobals) {
      this.globals = globals;
      this.title = 'Система тестирования';
  }
}
