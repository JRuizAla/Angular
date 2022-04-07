import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/heroes/models/hero.model';
import { HeroService } from '../heroes/services/hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(public heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes: Hero[]) => this.heroes = heroes.slice(1, 5));
  }
}
