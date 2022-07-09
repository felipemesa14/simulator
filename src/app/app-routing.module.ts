import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimuladorComponent } from './simulador/simulador.component';

const routes: Routes = [
  {path:'simulador', component: SimuladorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
