import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  neve:string="";
  ara:number=5000;

  formok:Form[]=[];

  hozzaadas():void{
    var form:Form={
      neve:this.neve,
      ara:this.ara,
    };

    this.formok.push(form);
    this.neve="";
    this.ara=5000;




  }



}

export interface Form{
  neve:string;
  ara:number;
}
