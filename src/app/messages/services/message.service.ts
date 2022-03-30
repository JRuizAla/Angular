import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message); // push solo se utiliza en arrays
  }

  clear(): void {
    this.messages = [];
  }
}