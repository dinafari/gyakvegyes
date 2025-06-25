import { Component } from '@angular/core';

@Component({
  selector: 'app-tanfolyam-felvitel',
  standalone: false,
  templateUrl: './tanfolyam-felvitel.component.html',
  styleUrl: './tanfolyam-felvitel.component.css'
})
export class TanfolyamFelvitelComponent {
  nev:string="";
  ar:number=4000;

  tanfolyamok:Tanfolyam[]=[];

  felvitel():void{
    var tanfolyam:Tanfolyam={
      nev:this.nev,
      ar:this.ar,
    };
    this.tanfolyamok.push(tanfolyam);
    this.nev="";
    this.ar=0;
    
  }


}


export interface Tanfolyam{
  nev:string;
  ar:number;
}