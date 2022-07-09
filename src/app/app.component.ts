import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SimuladorComponent } from './simulador/simulador.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(injector: Injector, public simulator: SimuladorComponent) {
    // Convert `PopupComponent` to a custom element.
    const appSimulator = createCustomElement(SimuladorComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('app-simulator', appSimulator);
  }
}
