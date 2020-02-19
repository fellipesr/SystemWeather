import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalsComponent } from './capitals.component';

describe('CapitalsComponent', () => {
  let component: CapitalsComponent;
  let fixture: ComponentFixture<CapitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
