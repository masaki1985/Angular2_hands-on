import { Component  } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent{

  constructor(private heroService: HeroService){}

  body = 'angular';

  selectedHero: Hero;

  heroes: Hero[];

  onSelect(hero: Hero): void {
     this.selectedHero = hero;
  }

  getHeroesSlowly(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroesSlowly();
  }
}
