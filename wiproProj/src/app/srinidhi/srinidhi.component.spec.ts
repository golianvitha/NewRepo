import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrinidhiComponent } from './srinidhi.component';

describe('SrinidhiComponent', () => {
  let component: SrinidhiComponent;
  let fixture: ComponentFixture<SrinidhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrinidhiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrinidhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
