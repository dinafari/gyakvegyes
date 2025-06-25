import { Component } from '@angular/core';

@Component({
  selector: 'app-uzenetfogadas',
  standalone: false,
  templateUrl: './uzenetfogadas.component.html',
  styleUrl: './uzenetfogadas.component.css'
})
export class UzenetfogadasComponent {
  uzenet:string="";

  uzenetek:Uzenet[]=[];

  kuld():void{
    var uzenet:Uzenet={
      uzenet:this.uzenet,

    };
    this.uzenetek.push(uzenet);
    this.uzenet="";
  }

}

export interface Uzenet{
  uzenet:string;
}
