import { Component } from '@angular/core';

@Component({
  selector: 'app-desable-button',
  imports: [],
  templateUrl: './desable-button.component.html',
  styleUrl: './desable-button.component.css'
})
export class DesableButtonComponent {
   habilitado: boolean = false;

   alternarHabilitado(){
    this.habilitado = !this.habilitado;
   }
}
