import { Component } from '@angular/core';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrl: './newform.component.css'
})
export class NewformComponent {
  email:string="";
  uzenet:string="";

  uzenetek:Uzenet[]=[];

  kuldes():void{
    var uzenet:Uzenet={
      email:this.email,
      uzenet:this.uzenet,
    
    };
    this.uzenetek.push(uzenet);
    this.email="";
    this.uzenet="";


    
  }



}

export interface Uzenet{
  email:string;
  uzenet:string;
}
