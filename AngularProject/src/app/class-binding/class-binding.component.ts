import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  multiclass={
    class1:true,
    class2:true,
    class3:false
  }
  multiStyle={
      'background':'black',
      'border':'10px solid red'

  }
  myname:string="rajib"
  myClass(){
   return "i am "+this.myname
  }

}
