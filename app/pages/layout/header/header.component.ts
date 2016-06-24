import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'header',
  templateUrl: 'app/pages/layout/header/header.html',
  directives: [MenuComponent]
})
export class HeaderComponent { }