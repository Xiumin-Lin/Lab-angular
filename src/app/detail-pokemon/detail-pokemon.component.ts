import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import Utils from '../utils';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pkmId: string | null = this.route.snapshot.paramMap.get('id');
    if (pkmId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pkmId);
    }
  }

  getPokemonTypeColor = (pkm: Pokemon) => Utils.getPokemonTypeColor(pkm);

  goToPokedex() {
    this.router.navigate(['/pokemons'])
  }

}
