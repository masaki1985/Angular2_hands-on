import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from "app/hero.service";
import { Hero } from '../hero'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  id: number;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  search(): void {
    if (!this.id) {
      this.router.navigate(['/detail',this.id]);
    }
  }
}
