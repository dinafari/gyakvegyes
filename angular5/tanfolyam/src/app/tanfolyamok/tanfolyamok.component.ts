import { Component } from '@angular/core';

@Component({
  selector: 'app-tanfolyamok',
  standalone: false,
  templateUrl: './tanfolyamok.component.html',
  styleUrl: './tanfolyamok.component.css'
})
export class TanfolyamokComponent {
  tanfolyamneve:string="";

  tanfolyamok:Tanfolyam[]=[];

  hozzaad():void{
    var tanfolyam:Tanfolyam={
      tanfolyamneve:this.tanfolyamneve,
    };

    this.tanfolyamok.push(tanfolyam);
    this.tanfolyamneve="";
  }



}

export interface Tanfolyam{
  tanfolyamneve:string;

}
