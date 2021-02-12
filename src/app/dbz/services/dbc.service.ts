import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

   
    constructor(){
        console.log("Servicio inicializado");
        
    }   

    get personajes():Personaje[]{
        return [...this._personajes];
    }

    private _personajes: Personaje[]=[
        {nombre:'Goku',poder:10000},{nombre:'Vegeta',poder:7000},
      ];
    
      

}