import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';


@Injectable()
export class DbzService {

   
    
    get personajes():Personaje[]{
        return [...this._personajes];
    }
    
    private _personajes: Personaje[]=[
        {nombre:'Goku',poder:10000},{nombre:'Vegeta',poder:7000},
    ];
    
    constructor(){
        console.log("Servicio inicializado");
        
    }   

    
    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }



}