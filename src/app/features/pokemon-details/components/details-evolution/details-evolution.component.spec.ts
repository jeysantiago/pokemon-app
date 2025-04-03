import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEvolutionComponent } from './details-evolution.component';

describe('DetailsEvolutionComponent', () => {
  let component: DetailsEvolutionComponent;
  let fixture: ComponentFixture<DetailsEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEvolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
