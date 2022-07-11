import {Component, Input} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss']
})

export class SimuladorComponent {

  @Input()
  set store(store: string) {
    this.storeId = store;
  }

  @Input()
  set total(total: number) {
    this.creditValue = total;
  }

  storeId: string = "5cbe1d8704ea5626804cfc85";
  creditValue: number = 50000;
  fees = 0;
  totalFeeValue = 0;

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.apiService.getData(this.creditValue, this.storeId).subscribe((resp: any) => {
      this.fees = resp.data.fees
      this.totalFeeValue = resp.data.totalFeeValue
    })
  }
}
