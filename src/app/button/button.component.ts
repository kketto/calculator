import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeniusNomeroUnoService } from '../genius-nomero-uno.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  text: string;

  backgroundColor: string;
  color: string;

  @Output()
  pressed = new EventEmitter();

  constructor(private geniusNomeroUnoService: GeniusNomeroUnoService) {
    this.geniusNomeroUnoService.restyle$.subscribe(() => {
      this.restyle();
    });
  }


  onClick(): void {
    this.pressed.emit();
    this.restyle();
  }

  private restyle(): void {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    this.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    if ((red + green + blue) > 383) {

      this.color = 'black';
    } else {
      this.color = 'white';
    }


  }
}
