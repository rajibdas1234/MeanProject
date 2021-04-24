import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text2secComponent } from './text2sec.component';

describe('Text2secComponent', () => {
  let component: Text2secComponent;
  let fixture: ComponentFixture<Text2secComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text2secComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text2secComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
