import { Component, OnInit } from '@angular/core';


interface Personaje{
  nombre: string;
  poder: number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  constructor() { }

  personajes: Personaje[]=[
    {nombre:'Goku',poder:10000},{nombre:'Vegeta',poder:7000},


  ];


  nuevo: Personaje={
      nombre: '',
      poder:0,
  }


  cambiarNombre(eve: any){
    console.log(eve);
    
  }

  agregar(){

      if(this.nuevo.nombre.trim().length===0){
        return;
      } 

   

      this.personajes.push(this.nuevo);
      
      //despues de insertarlo, reinicio
      this.nuevo={
        nombre:'',
        poder:0,
      }
      
    
  }

}
