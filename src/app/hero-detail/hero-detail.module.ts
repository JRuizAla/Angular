import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
   declarations:[HeroDetailComponent],
   imports:[ RouterModule, CommonModule]
})
export class HeroDetailModule { }
