import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémon</h1>`
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  // constructor() { } ❌ utiliser ngOnInit pour l'initialisation

  ngOnInit(): void {
    console.table(this.pokemonList)
    this.selectPokemon(this.pokemonList[0])
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`)
  }
}
