import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';
import { PokemonRoutingModule } from './pokemon-routing-module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PokemonRoutingModule,
    RouterModule
  ],
  declarations: [
    PokemonListarComponent,
    PokemonDetalleComponent
  ],
  exports: [PokemonListarComponent, PokemonDetalleComponent]
})
export class PokemonModule { }
