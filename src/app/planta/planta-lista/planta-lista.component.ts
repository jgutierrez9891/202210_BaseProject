import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-lista',
  templateUrl: './planta-lista.component.html',
  styleUrls: ['./planta-lista.component.css']
})
export class PlantaListaComponent implements OnInit {

  plantas: Array<Planta> = [];
  interior: number = 0;
  exterior: number = 0;

  constructor(private plantaService: PlantaService) { }

  ngOnInit() {
    this.getPlantas();
  }

  getPlantas(): void{
    this.plantaService.getPlantas().subscribe((plantas) =>{
      this.plantas = plantas;
      for (let index = 0; index < plantas.length; index++) {
        if (plantas[index].tipo=="Interior") {
          this.interior++
        } else if (plantas[index].tipo=="Exterior"){
          this.exterior++
        }
      }
    });
  }

  getTipos(plantas: Array<Planta>){
    console.log(plantas.length)

  }

}
