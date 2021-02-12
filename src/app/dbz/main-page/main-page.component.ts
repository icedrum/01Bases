import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbc.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  constructor() {
      
  }
 
  nuevo: Personaje={
    nombre: 'XXXXX',
    poder:10,
}

  
}
