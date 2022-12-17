import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedFeatureComponent } from './seed-feature.component';

describe('SeedFeatureComponent', () => {
  let component: SeedFeatureComponent;
  let fixture: ComponentFixture<SeedFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
