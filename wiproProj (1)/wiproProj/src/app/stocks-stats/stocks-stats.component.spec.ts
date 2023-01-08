import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksStatsComponent } from './stocks-stats.component';

describe('StocksStatsComponent', () => {
  let component: StocksStatsComponent;
  let fixture: ComponentFixture<StocksStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocksStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
