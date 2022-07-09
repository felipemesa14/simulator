import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss']
})

export class SimuladorComponent {
  fees = 0;
  totalFeeValue = 0;

  constructor(
    private apiService: ApiService
  ) {
    this.apiService.getData().subscribe((resp: any) => {
      this.fees = resp.data.fees
      this.totalFeeValue = resp.data.totalFeeValue
    })
  }
}
