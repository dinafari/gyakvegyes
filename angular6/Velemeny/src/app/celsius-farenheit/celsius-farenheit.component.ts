import { Component } from '@angular/core';

@Component({
  selector: 'app-celsius-farenheit',
  standalone: false,
  templateUrl: './celsius-farenheit.component.html',
  styleUrl: './celsius-farenheit.component.css'
})
export class CelsiusFarenheitComponent {
  celsius:string="";
  
  hofokok:Hofok[]=[];

  atvalt():void{
    const c= parseFloat(this.celsius);
    const f =c* 9/5 +32;

    const hofok:Hofok={
      celsius:c,
      fahrenheit:f
    };
    this.hofokok.push(hofok);
    this.celsius="";
  }



}


export interface Hofok{
  celsius:number;
  fahrenheit:number;
}
