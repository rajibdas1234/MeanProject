import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }
  
  print(val,containerId){
    let ele=document.createElement('li');
    ele.innerHTML=val;
    document.getElementById(containerId).appendChild(ele)
    }
}
