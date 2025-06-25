import { Component } from '@angular/core';

@Component({
  selector: 'app-tanfolyamlista',
  standalone: false,
  templateUrl: './tanfolyamlista.component.html',
  styleUrl: './tanfolyamlista.component.css'
})
export class TanfolyamlistaComponent {
  nev:string="";
  ar:number=5000;

  tanfolyamok:Tanfolyam[]=[];

  felvitel():void{
    var tanfolyam:Tanfolyam={
      nev:this.nev,
      ar:this.ar,
    };
    this.tanfolyamok.push(tanfolyam);
    this.nev="",
    this.ar=5000;//this.ar = 0;  vagy: this.ar = 5000;
  }

}

export interface Tanfolyam{
  nev:string;
  ar:number;
}
