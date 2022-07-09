import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SimuladorComponent } from './simulador/simulador.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SimuladorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const appSimulator = createCustomElement(SimuladorComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('app-simulator', appSimulator);
  }
}
