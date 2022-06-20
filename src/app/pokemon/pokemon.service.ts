import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonTypeList: Array<string>;

  constructor() {
    this.pokemonTypeList = new Array<string>;
    this.updatePkmTypeList();
  }

  private updatePkmTypeList() {
    POKEMONS.forEach(pkm => {
      pkm.types.forEach(pkmType => {
        let typeIsPresent = this.pokemonTypeList.find(type => type == pkmType)
        if (!typeIsPresent) {
          this.pokemonTypeList.push(pkmType);
        }
      })
    });
  }

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(id: number): Pokemon | undefined {
    return POKEMONS.find(pkm => pkm.id == id);
  }

  getPokemonTypeList(): string[] {
    return this.pokemonTypeList
  }
}
