import { Component } from '@angular/core';

@Component({
  selector: 'app-kapcsolat',
  standalone: false,
  templateUrl: './kapcsolat.component.html',
  styleUrl: './kapcsolat.component.css'
})
export class KapcsolatComponent {
  nev:string="";
  emailcim:string="";

  kapcsolatok:Kapcsolat[]=[];

  kuldes():void{
    var kapcsolat:Kapcsolat={
      nev:this.nev,
      emailcim:this.emailcim,

    };
    this.kapcsolatok.push(kapcsolat);
    this.nev="";
    this.emailcim="";
  }



}

export interface Kapcsolat{
  nev:string;
  emailcim:string;

}
