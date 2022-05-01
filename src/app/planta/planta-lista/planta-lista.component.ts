import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';

@Component({
  selector: 'app-planta-lista',
  templateUrl: './planta-lista.component.html',
  styleUrls: ['./planta-lista.component.css']
})
export class PlantaListaComponent implements OnInit {

  plantas: Array<Planta> = [];

  constructor() { }

  ngOnInit() {
  }

}
