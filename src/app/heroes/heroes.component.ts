import { Component, OnInit } from '@angular/core';

import { Hero } from './models/hero.model';
import { HeroService } from './services/hero.service';
import { MessageService } from '../messages/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

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