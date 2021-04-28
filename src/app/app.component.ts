import { Component } from '@angular/core';
import { GeniusNomeroUnoService } from './genius-nomero-uno.service';

type ButtonValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | '.';
enum OperatorValue {
  Plus = '+',
  Minus = '-',
  Div = '/',
  Mul = 'X'
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayValue = '';
  OperatorValue = OperatorValue;

  private firstValue: string;
  private operation: OperatorValue;

  constructor(private geniusNomeroUnoService: GeniusNomeroUnoService) { }




  clickDigitOrDot(char: ButtonValue): void {
    if (this.displayValue === '' && char === '.') {
      this.displayValue = '0.'
      return;
    }

    if (this.displayValue.includes('.') && char === '.') {
      return;
    }
    if (this.displayValue === '0' && char === 0) {
      return;
    }

    if (this.displayValue === '0' && char !== 0 && char !== '.') {

      this.displayValue = char.toString();
      return;
    }

    this.displayValue += char;
  }

  backspace(): void {
    this.displayValue = this.displayValue.substr(0, this.displayValue.length - 1)
  }


  operationClick(operator: OperatorValue): void {

    this.firstValue = this.displayValue;

    this.displayValue = '';

    this.operation = operator;

  }


  equals(): void {
    if (this.firstValue === null) {
      return;
    }

    switch (this.operation) {

      case OperatorValue.Plus: {
        this.displayValue = (Number(this.firstValue) + Number(this.displayValue)).toString();
        break;
      }

      case OperatorValue.Minus: {
        this.displayValue = (Number(this.firstValue) - Number(this.displayValue)).toString();
        break;
      }

      case OperatorValue.Mul: {
        this.displayValue = (Number(this.firstValue) * Number(this.displayValue)).toString();
        break;
      }

      case OperatorValue.Div: {
        if (this.displayValue === '0') {
          return;
        }
        this.displayValue = (Number(this.firstValue) / Number(this.displayValue)).toString();
        break;
      }
    }

    this.firstValue = null;
  }


  clearing(): void {
    this.firstValue = null;
    this.operation = null;
    this.displayValue = '';
  }

  negate(): void {
    if (this.displayValue === '0' || this.displayValue === '') {
      return;
    }

    this.displayValue = (Number(this.displayValue) * -1).toString();
  }


  geniusNomeroUno(): void {
    this.geniusNomeroUnoService.triggerGeniusNomeroUno();
  }



}
