import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeniusNomeroUnoService {
  restyle$ = new EventEmitter();

  triggerGeniusNomeroUno(): void {
    this.restyle$.emit();
  }
}
