import { Component } from '@angular/core';

@Component({
  selector: 'app-velemeny-hozzaadas',
  standalone: false,
  templateUrl: './velemeny-hozzaadas.component.html',
  styleUrl: './velemeny-hozzaadas.component.css'
})
export class VelemenyHozzaadasComponent {

  nev:string="";
  velemeny:string="";

  velemenyek:Velemeny[]=[];

  hozzaadas():void{
    var velemeny:Velemeny={
      nev:this.nev,
      velemeny:this.velemeny,
      datum: new Date() // aktuális dátum

    };
    this.velemenyek.push(velemeny);
    this.nev="";
    this.velemeny="";
  }



}

export interface Velemeny{
  nev:string;
  velemeny:string;
  datum:Date;
}
