import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import {FuelDetails} from '../Models/FuelDetails.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuelServiceService {

  constructor(private httpclient:HttpClient) {}

  //state:string='goa'

  baseurl:string = 'https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/fuel-prices/today/india';
  //url=this.baseurl+'/'+this.state


getFuelPrices(state:string):Observable<FuelDetails>{
  return this.httpclient.get<FuelDetails>(this.baseurl+'/'+state,{
    headers : new HttpHeaders()
.set('X-RapidAPI-Key', 'ce1a213110mshcb502c8299c9621p1f011djsn34c347d112b3')
.set('X-RapidAPI-Host', 'daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com')
  })
}

}
