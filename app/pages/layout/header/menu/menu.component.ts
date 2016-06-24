import { Component } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';

@Component({
  selector: 'bierapp-menu',
  templateUrl: 'app/pages/layout/header/menu/menu.html',
  directives: [RouterLink]
})
export class MenuComponent { }