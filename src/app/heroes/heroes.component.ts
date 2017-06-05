import { Component  } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

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
