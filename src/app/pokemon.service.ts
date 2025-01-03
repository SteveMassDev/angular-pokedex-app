import { Injectable } from '@angular/core';
import { POKEMON_LIST } from './pokemon-list.fake';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemonList() {
    return POKEMON_LIST;
  }

  getPokemonById(id: number): Pokemon {
    const pokemon = POKEMON_LIST.find((pokemon) => pokemon.id === id);

    if (!pokemon) {
      throw new Error(`No Pokemon found with id ${id}`);
    }

    return pokemon;
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
    ];
  }
}
