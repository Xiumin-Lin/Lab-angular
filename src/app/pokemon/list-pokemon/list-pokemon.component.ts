import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import Utils from '../utils';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    private pkmService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonList = this.pkmService.getPokemonList();
  }

  getPokemonTypeColor = (pkm: Pokemon) => Utils.getPokemonTypeColor(pkm);
  goToPokemonDetail = (pkm: Pokemon) => this.router.navigate(['/pokemon', pkm.id])
}

// export class ListPokemonComponent implements OnInit {
//   pokemonList: Pokemon[] = POKEMONS;
//   pokemonSelected: Pokemon | undefined;

//   // constructor() { } ❌ utiliser ngOnInit pour l'initialisation

//   ngOnInit(): void {
//     console.table(this.pokemonList);
//   }

//   // selectPokemon(event: MouseEvent) {
//   //   const index: number = +(event.target as HTMLInputElement).value // ou utiliser Number(...)
//   //   console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`)
//   // }

//   selectPokemon(pokemonId: string) {
//     const pkm: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
//     this.pokemonSelected = pkm;
//     if (pkm) {
//       console.log(`Vous avez demandé le pokémon ${pkm.name}`);
//     } else {
//       console.log(`Vous avez demandé un pokémon qui n'existe pas`);
//     }
//   }
// }
