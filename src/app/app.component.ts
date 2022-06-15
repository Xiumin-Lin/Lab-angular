import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  // constructor() { } ❌ utiliser ngOnInit pour l'initialisation

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  // selectPokemon(event: MouseEvent) {
  //   const index: number = +(event.target as HTMLInputElement).value // ou utiliser Number(...)
  //   console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`)
  // }

  selectPokemon(pokemonId: string) {
    const pkm: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    this.pokemonSelected = pkm;
    if (pkm) {
      console.log(`Vous avez demandé le pokémon ${pkm.name}`);
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas`);
    }
  }

  getPokemonTypeColor(pokemon: Pokemon) {
    switch (pokemon.types[0].toLowerCase()) {
      case "combat": return 'peru';
      case "eau": return 'blue';
      case "electrik": return 'yellow';
      case "feu": return 'red';
      case "fée": return 'pink';
      case "insecte": return 'darkolivegreen';
      case "normal": return 'grey';
      case "plante": return 'green';
      case "poison": return 'purple';
      case "psy": return 'darkviolet ';
      case "vol": return 'aliceblue';
      default: return 'grey';
    }
  }
}
