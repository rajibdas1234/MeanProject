import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
msg:string=" ";
  addcart(event)
  {
     this.msg=event.target.value +"Added to cart";
  }
  clickme(event)
  {
console.log(event);
  }
  myfunction(my)
  {
    console.log(my.name)
  }

}
