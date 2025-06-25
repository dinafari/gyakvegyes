import { Component } from '@angular/core';

@Component({
  selector: 'app-szovegbevitel',
  standalone: false,
  templateUrl: './szovegbevitel.component.html',
  styleUrl: './szovegbevitel.component.css'
})
export class SzovegbevitelComponent {
  szovegbevitel:string="";

  nevek:string[]=["Anna", "Béla", "Cecil", "Dénes", "Edit", "Emese", "Erik", "Ferenc"];
  //Nem kell itt interface , mert csak string[] a tömb, nem objektumokat tartalmaz.

  get szurtnevek():string[]{ //értéket ad vissza azért get és string
    return this.nevek.filter(nevek=>
    nevek.toLowerCase().includes(this.szovegbevitel.toLowerCase()));
    
  };


}

