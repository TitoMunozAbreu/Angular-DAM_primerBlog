import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/compartidos/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  //declara la lista de entradas
  ListaEntradas: Entrada[];

  constructor(){
    //incializar la lista con datos
    this.ListaEntradas = [
      {
        titulo: 'Stiedemann - Pagac',
        resumen: 'Secured well-modulated hierarchy'
      },
      {
        titulo: 'Nienow - Hammes',
        resumen: 'Automated reciprocal toolset'
      },
      {
        titulo: 'Durgan and Sons',
        resumen: 'Networked content-based knowledge user'
      }
    ]
  }

}
