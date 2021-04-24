import { Component, OnInit } from '@angular/core';
import { timer, interval, Subscription } from 'rxjs';
import { DesignutilityService } from 'src/app/appService/designutility.service';

@Component({
  selector: 'app-timeinterval',
  templateUrl: './timeinterval.component.html',
  styleUrls: ['./timeinterval.component.css']
})
export class TimeintervalComponent implements OnInit {

  constructor(private _designutility:DesignutilityService) { }
  obj;
  videolimit:Subscription;
  ngOnInit(): void {
    //const videoEmit=interval(1000);
    const videoEmit=timer(2000,1000);

    this.videolimit=videoEmit.subscribe(res=>{
      console.log(res)
      this.obj="video"+res;
      this._designutility.print(this.obj,'elcontainer1');
      this._designutility.print(this.obj,'elcontainer2');
      this._designutility.print(this.obj,'elcontainer3');




      if(res >=10){
        this.videolimit.unsubscribe()
      }
    })
  }

}
