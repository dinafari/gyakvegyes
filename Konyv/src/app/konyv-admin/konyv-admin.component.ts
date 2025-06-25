import { Component } from '@angular/core';

@Component({
  selector: 'app-konyv-admin',
  standalone: false,
  templateUrl: './konyv-admin.component.html',
  styleUrl: './konyv-admin.component.css'
})
export class KonyvAdminComponent {
  cime:string="";
  szerzoje:string="";

  keresettCim:string="";
  keresettSzerzo:string="";


  osszesKonyv: Konyv[] = [];
  konyvek:Konyv[]=[];
  
  

  listazas():void{
    const ujkonyv:Konyv={
      cime:this.cime,
      szerzoje:this.szerzoje,
      

      

    };
    this.osszesKonyv.push(ujkonyv);
    this.konyvek = [...this.osszesKonyv]; // frissítjük a megjelenített listát is
    this.cime="";
    this.szerzoje="";
  }
  
  szures():void{
    const cim = this.keresettCim.toLowerCase();
    const szerzo = this.keresettSzerzo.toLowerCase();

    this.konyvek=this.osszesKonyv.filter(konyv=>
      konyv.cime.toLowerCase().includes(cim)&& 
      konyv.szerzoje.toLowerCase().includes(szerzo)
    );
  }

}

export interface Konyv{
  cime:string;
  szerzoje:string;
  

}
