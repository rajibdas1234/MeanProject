import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignutilityService } from 'src/app/appService/designutility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  constructor(private _designutility:DesignutilityService) { }
  @ViewChild('add') add:ElementRef;
  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    let count=1;
  fromEvent(this.add.nativeElement, 'click').subscribe(res=>{
    let countvalue="video" + count++
    console.log(countvalue)
    this._designutility.print(countvalue,'listelement1');
    this._designutility.print(countvalue,'listelement');
  })

}

}
