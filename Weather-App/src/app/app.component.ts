import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './Services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  weather:any;

  searchWeather() {
  console.log(this.searchform.value)
    this.srv.searchWeatherByCity(this.searchform.get("city")?.value).subscribe(res=>{
    console.log(res);
    this.weather=res.data;
  })
  }
    title = 'Weather_Angular';
    searchform!:FormGroup;
    constructor(private fb:FormBuilder,private srv:WeatherService){}


    ngOnInit(): void {
      this.searchform=this.fb.group({
        city:['',Validators.required]
      })
  }
}
