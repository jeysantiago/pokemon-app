import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAbilitiesComponent } from './details-abilities.component';

describe('DetailsAbilitiesComponent', () => {
  let component: DetailsAbilitiesComponent;
  let fixture: ComponentFixture<DetailsAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAbilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
