import { Component, OnInit } from '@angular/core';
import{FuelServiceService} from '../services/fuel-service.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FuelDetails } from '../Models/FuelDetails.model';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
})
export class PricesComponent {
  constructor(
    private fuelService: FuelServiceService,
    private http: HttpClient
  ) {}

  fuelData?: FuelDetails;

  name: number = 0;

  stateName: string = '';
  average: number=0;
  distance: number = 0;
  people: number = 0;
  result: number = 0;
  fuelPrice?: number;

  delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async onSubmit() {
    this.getFuelDetails(this.stateName);
    await this.delay(2000);
    console.log(typeof this.fuelData);

    if (this.fuelData !== undefined) {
      this.fuelPrice = this.fuelData?.fuel?.petrol?.retailPrice;
      this.result =
        ((this.distance / this.average) * this.fuelPrice) / this.people;
      console.log('final', this.result);
    }
  }

  ngOnInit() {}

  private getFuelDetails(state: string) {
    this.fuelService.getFuelPrices(state).subscribe({
      next: (success) => {
        console.log(success);
        this.fuelData = success;
        this.name = this.fuelData.fuel.diesel.retailPrice;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
