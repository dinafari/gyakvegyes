import { Component } from '@angular/core';

@Component({
  selector: 'app-diak-lista',
  standalone: false,
  templateUrl: './diak-lista.component.html',
  styleUrl: './diak-lista.component.css'
})
export class DiakListaComponent {
  nev:string="";
  atlag:number=5;

  diakok:Diaklista[]=[];

  felvitel():void{
    var diak:Diaklista={
      nev:this.nev
      atlag:this.atlag,
    };

    this.diakok.push(diak);
    this.nev="";
    this.atlag=5;
  }




}

export interface Diaklista{
  nev:string;
  atlag:number;

}
