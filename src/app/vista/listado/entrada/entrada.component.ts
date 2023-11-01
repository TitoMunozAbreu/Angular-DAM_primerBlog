import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from 'src/app/compartidos/interfaces/entrada';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent{
  @Input()
  entrada: Entrada;

  constructor(){
    this.entrada = {
      titulo: '',
      resumen: ''
    }
  }

}
