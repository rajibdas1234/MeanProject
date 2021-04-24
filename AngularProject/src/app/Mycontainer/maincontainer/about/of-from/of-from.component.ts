import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DesignutilityService } from 'src/app/appService/designutility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private _designutility:DesignutilityService) { }

  ngOnInit(): void {
    const valueList=of('rajib','anjib','saroj');
    valueList.subscribe(res=>{
      console.log(res);
      this._designutility.print(res,"list")
    })

  }

}
