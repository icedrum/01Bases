import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @Input() newP: Personaje={
    nombre:'',
    poder:0,
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje>=new EventEmitter()

  agregar(){

    if(this.newP.nombre.trim().length===0){
      return;
    } 

    

    console.log(this.newP);
    
    this.onNuevoPersonaje.emit(this.newP);

    //despues de insertarlo, reinicio
    this.newP={
      nombre:'',
      poder:0,
    }
    
  
}





}
