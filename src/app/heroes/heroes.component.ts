import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero.model';
import { HeroService } from 'src/app/heroes/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(public heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => {
          console.log('heroes', heroes);
         return  this.heroes = heroes
        });
  }
}
