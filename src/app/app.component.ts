import { Component } from '@angular/core';
import { DesableButtonComponent } from './desable-button/desable-button.component';

@Component({
  imports: [DesableButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Hola mundo';
}

