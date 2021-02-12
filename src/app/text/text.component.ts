import { FunctionCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  a:number=10;  
  b:string="raju";
  c:boolean=false;


  
  

  constructor() {
    console.log(' b= '+ this.b +' c= '+ this.c +' a= '+ this.a);

    function add(a,b) {    
      var d:string=a+b;
        console.log(d);
      }
      add(1,"");
      function name(a:number,b:string) {
       let d:string=a+b;
       console.log(d)
      }
      name(145,"raju");
      // name("raju",5);
     
    
   }

  ngOnInit() {
  }

}
