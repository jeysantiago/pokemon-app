import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStatsComponent } from './details-stats.component';

describe('DetailsStatsComponent', () => {
  let component: DetailsStatsComponent;
  let fixture: ComponentFixture<DetailsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
