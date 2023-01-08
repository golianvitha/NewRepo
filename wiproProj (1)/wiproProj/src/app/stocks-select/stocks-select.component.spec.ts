import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksSelectComponent } from './stocks-select.component';

describe('StocksSelectComponent', () => {
  let component: StocksSelectComponent;
  let fixture: ComponentFixture<StocksSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocksSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
