import { Component } from '@angular/core';

@Component({
  selector: 'app-tanfolyam-admin',
  standalone: false,
  templateUrl: './tanfolyam-admin.component.html',
  styleUrl: './tanfolyam-admin.component.css'
})
export class TanfolyamAdminComponent {
  nev:string="";
  ar:number=0;

  osszesTanfolyamadata:Tanfolyam[]=[
    { nev: 'Műkörmös', ar: 15000 },
    { nev: 'Fodrász', ar: 8000 },
    { nev: 'Virágkötő', ar: 75000 },
    { nev: 'Cukrász', ar: 9000 }

  ];

  tanfolyamok:Tanfolyam[]=[...this.osszesTanfolyamadata];

  szures():void{
    this.tanfolyamok=this.osszesTanfolyamadata.filter(tanfolyam=>tanfolyam.ar >this.ar);

  }
  felvitel():void{
    const ujTanfolyam:Tanfolyam={
      nev:this.nev,
      ar:this.ar,
    };
    this.tanfolyamok.push(ujTanfolyam);
    this.osszesTanfolyamadata.push(ujTanfolyam); // hogy a szűrés is működjön az új elemre
    this.nev="";
    this.ar=0;

  }


  reset(): void {//"reset" gombot, amellyel visszaállítod az összes tanfolyamot
    this.tanfolyamok = [...this.osszesTanfolyamadata];
  }


}

export interface Tanfolyam{
  nev:string;
  ar:number;
}
