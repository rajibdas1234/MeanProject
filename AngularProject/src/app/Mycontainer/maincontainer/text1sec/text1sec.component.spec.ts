import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text1secComponent } from './text1sec.component';

describe('Text1secComponent', () => {
  let component: Text1secComponent;
  let fixture: ComponentFixture<Text1secComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text1secComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text1secComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
