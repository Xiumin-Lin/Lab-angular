import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import Utils from '../utils';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute, // les propriétés contenues dans l'URL de la page active
    private router: Router,
    private pkmService: PokemonService
  ) { }

  ngOnInit(): void {
    const pkmId: string | null = this.route.snapshot.paramMap.get('id');
    if (pkmId) {
      // On converti un string en number avec le signe '+' => +pkmId
      this.pokemon = this.pkmService.getPokemonById(+pkmId)
    }
  }

  getPokemonTypeColor = (pkm: Pokemon) => Utils.getPokemonTypeColor(pkm);

  goToPokedex() {
    this.router.navigate(['/pokemons'])
  }

  goToEditPokemon(pkm: Pokemon) {
    this.router.navigate(['./edit/pokemon', pkm.id])
  }
}
