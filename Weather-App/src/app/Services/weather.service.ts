import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  //(rmd559977)
    private apikey='3e0f6f97e5msh367d609f60f928ap14fb98jsn61fbb1259f1a';
//rhr74328 (limit over)
 //private apikey='a9656013e8msh19ccb2d093a97cbp1f1a45jsnabfba9c27467'; 
 
private apiurl= 'https://the-weather-api.p.rapidapi.com/api/weather';
private apihost='the-weather-api.p.rapidapi.com';
  constructor(private http:HttpClient) { }

  searchWeatherByCity(city:string):Observable<any>{
const headers=new HttpHeaders().set("x-rapidapi-key",this.apikey).set("x-rapidapi-host",this.apihost);
const options= {headers};
return this.http.get(`${this.apiurl}/${city}`,options)
  }
  

}
