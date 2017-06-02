import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  body = 'angular';

  heroes: Hero[] = [
    {id: 1, name: 'Mr.Nice'},
    {id: 2, name: 'Narco'},
    {id: 3, name: 'Bombasto'},
  ];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
