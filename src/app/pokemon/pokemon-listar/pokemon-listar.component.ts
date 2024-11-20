import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrl: './pokemon-listar.component.css'
})
export class PokemonListarComponent implements OnInit {
    pokemons: PokemonDetailDto[] = [];
    selected: boolean = false;
    selectedPokemon!: PokemonDetailDto;
    p: number = 1;
    searchedPokemon: any;

    constructor(private servicion: PokemonService){}

    getPokemones(): void {
      this.pokemons = this.servicion.getPokemons();
    }

    onSelected(pokemon: PokemonDetailDto): void {
      this.selected = true;
      this.selectedPokemon = pokemon;
    }

    ngOnInit(){
        this.getPokemones();
    }
}