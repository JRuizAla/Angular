import { TestBed } from '@angular/core/testing';
import { MessageService } from 'src/app/messages/services/message.service';
import { HeroService } from './hero.service';


describe('HeroService', () => {
  let service: HeroService;
 

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MessageService]});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
