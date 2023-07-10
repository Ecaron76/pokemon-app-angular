import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from 'src/app/data/mock-pokemon-list';
import { Pokemon } from 'src/app/models/pokemon';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit{
  pokemonList: Pokemon[]
  pokemon: Pokemon|undefined
 
  constructor(private route: ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
    this.pokemonList = POKEMONS
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id')
    
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }
  goToPokemonList(){
    this.router.navigate(['/pokemons'])
  }
}
