import { Component } from '@angular/core';

@Component({
  selector: 'app-tanfolyamok',
  standalone: false,
  templateUrl: './tanfolyamok.component.html',
  styleUrl: './tanfolyamok.component.css'
})
export class TanfolyamokComponent {
  ar:number=5000;

  // Eredeti lista amiből ,lehet keresni a felhasználónak.

  osszesTanfolyam:Tanfolyam[]=[
    { nev: 'JavaScript', ar: 15000 },
    { nev: 'Typescript', ar: 8000 },
    { nev: 'CSS', ar: 75000 },
    { nev: 'Angular', ar: 9000 }
  ];

  // Szűrt lista:
  tanfolyamok:Tanfolyam[]=[...this.osszesTanfolyam];

  //Gombra kattintásra frissítjük a szűrt listát

  keres():void{
    this.tanfolyamok=this.osszesTanfolyam.filter(tanfolyam =>tanfolyam.ar> this.ar);
    
  }

}

export interface Tanfolyam{
  ar:number,
  nev:string;
}
