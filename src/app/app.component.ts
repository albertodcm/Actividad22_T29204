import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
        })
        export class AppComponent {
        title = 'cash';

        Saldo = 0;
        Transacciones = [
        ];

        dep(cant: HTMLInputElement) {
        if (cant.value === '') {
          alert('Tiene que ingresar una cantidad');
        } else {
        if (cant.valueAsNumber >= 0) {
          this.Saldo = this.Saldo + cant.valueAsNumber;
          this.Transacciones.unshift(cant.valueAsNumber);
        } else {
          alert('No puede ingresar valores negativos');
        }
      }

    }

   ret(cant: HTMLInputElement) {
     if (cant.value === '') {
        alert('Tiene que ingresar una cantidad');
     } else {
        if (cant.valueAsNumber >= 0) {
       this.Saldo = this.Saldo - cant.valueAsNumber;
       this.Transacciones.unshift(-cant.valueAsNumber);
      } else {
       alert('No puede ingresar valores negativos');
      }
    }
  }

}
