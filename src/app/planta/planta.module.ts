import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListaComponent } from './planta-lista/planta-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlantaListaComponent],
  exports: [PlantaListaComponent]
})
export class PlantaModule { }
