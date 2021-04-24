import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincontainerComponent } from './Mycontainer/maincontainer/maincontainer.component';
import { TopnavComponent } from './Mycontainer/maincontainer/topnav/topnav.component';
import { HeaderComponent } from './Mycontainer/maincontainer/header/header.component';
import { Text1secComponent } from './Mycontainer/maincontainer/text1sec/text1sec.component';
import { Text2secComponent } from './Mycontainer/maincontainer/text2sec/text2sec.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './Mycontainer/maincontainer/about/about.component';
import { ProductComponent } from './Mycontainer/maincontainer/product/product.component';
import { ContactComponent } from './Mycontainer/maincontainer/contact/contact.component';
import { ObservableComponent } from './Mycontainer/maincontainer/about/observable/observable.component';
import { FromEventComponent } from './Mycontainer/maincontainer/about/from-event/from-event.component';
import { fromEvent, from } from 'rxjs';
import { TimeintervalComponent } from './Mycontainer/maincontainer/about/timeinterval/timeinterval.component';
import {DesignutilityService} from './appService/designutility.service';
import { OfFromComponent } from './Mycontainer/maincontainer/about/of-from/of-from.component';
import { ToArrayComponent } from './Mycontainer/maincontainer/about/to-array/to-array.component';
import { MapComponent } from './Mycontainer/maincontainer/about/map/map.component';
import { EmployeeComponent } from './Mycontainer/maincontainer/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
const myRout:Routes=[
  {path:'',component:HeaderComponent},
{path:'about',component:AboutComponent,children:[
{path:'',component:ObservableComponent},
{path:'fromEvent',component:FromEventComponent},
{path:'timeinterval',component:TimeintervalComponent},
{path:'of-from',component:OfFromComponent},
{path:'toArray',component:ToArrayComponent},
{path:'map',component:MapComponent}



]},
{path:'contact',component:ContactComponent},
{path:'product',component:ProductComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    MaincontainerComponent,
    TopnavComponent,
    HeaderComponent,
    Text1secComponent,
    Text2secComponent,
    DataBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwowaydatabindingComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    ObservableComponent,
    FromEventComponent,
    TimeintervalComponent,
    OfFromComponent,
    ToArrayComponent,
    MapComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(myRout),
    NgbModule
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
