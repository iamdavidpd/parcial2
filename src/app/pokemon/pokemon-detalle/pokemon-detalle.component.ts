import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrl: './pokemon-detalle.component.css'
})
export class PokemonDetalleComponent implements OnInit {
    pokemonId!: string;
    @Input() pokemon!: PokemonDetailDto;

    constructor(private route: ActivatedRoute, private servicio: PokemonService){}

    getPokemon(){
      this.servicio.getPokemon(this.pokemonId);
    }

    ngOnInit(){
        this.getPokemon();
        }
    }
