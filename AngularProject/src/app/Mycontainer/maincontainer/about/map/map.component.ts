import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const broadcastvideo=interval(2000);
    broadcastvideo.subscribe(res=>{
      console.log(res)
    })
  }
  

}
