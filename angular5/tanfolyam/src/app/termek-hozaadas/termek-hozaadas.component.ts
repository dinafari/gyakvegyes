import { Component } from '@angular/core';

@Component({
  selector: 'app-termek-hozaadas',
  standalone: false,
  templateUrl: './termek-hozaadas.component.html',
  styleUrl: './termek-hozaadas.component.css'
})
export class TermekHozaadasComponent {
  nev:string="";
  ar:number=3500;

  termekek:Termek[]=[];

  hozzaad():void{
    var termek:Termek={
      nev:this.nev,
      ar:this.ar,

    };
    this.termekek.push(termek);
    this.nev="";
    this.ar=3500;
  }

}

export interface Termek{
  nev:string;
  ar:number;

}
