import {Component} from '@angular/core';
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar = true;


    frase: any = {
        mensaje: ' Un gran poder requiere de una gran responsabilidad',
        autor: 'Ben parker' 
    };

    personajes : string [] = ['Spiderman', 'Venom' , 'Doctor octopus']
}