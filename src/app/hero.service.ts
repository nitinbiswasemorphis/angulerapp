import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './moch-heroes';

@Injectable()
export class HeroService {

  constructor() { }


  getHeroes(): Hero[] {
    return HEROES;
  }

}
