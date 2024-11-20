import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListarComponent } from './pokemon/pokemon-listar/pokemon-listar.component';

const routes: Routes = [
    { path: '', component: PokemonListarComponent},
    { path: 'pokemones', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }