import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Variables
  num: number;
  mayorMenor = '...';
    // Se le asigna la respuesta de la funcion
  numSecret: number = this.numAleatorio(0, 100);

  constructor() { }

  // Funcion que devuelve un numero aleatorio entre los dos numeros pasados por parametro
  numAleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }

  // Funcion que compara el numSecret con la variable num introducida y devuelve un mensaje
  compruebaNumero() {
    if (this.num) {
      if (this.numSecret < this.num) {
        this.mayorMenor = 'menor que';
      }
      else if (this.numSecret > this.num) {
        this.mayorMenor = 'mayor que';
      }
      else {
        this.mayorMenor = '';
      }
    }
  }

  reinicia() {
    // reiniciamos las variables
    this.num = null;
    this.mayorMenor = '...';
    this.numSecret = this.numAleatorio(0, 100);
  }
}
