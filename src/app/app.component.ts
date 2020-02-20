import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CashApp';

  balance = 0;
  cantidad = 0;
  transacciones = [];

  cant(cantidad: HTMLInputElement, funcion) {
      if (cantidad.valueAsNumber <= 0 ||  cantidad.value === '') {
        alert('Por favor ingrese un numero con un valor mayor a 0');
    } else {

      if (funcion === 'deposito') {
        this.balance += cantidad.valueAsNumber;
        this.transacciones.unshift(cantidad.valueAsNumber);
      } else if (funcion === 'retiro') {
        this.balance -= cantidad.valueAsNumber;
        this.transacciones.unshift(-cantidad.valueAsNumber);
    }
  }
  }
}
