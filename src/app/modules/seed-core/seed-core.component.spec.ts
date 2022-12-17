import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedCoreComponent } from './seed-core.component';

describe('SeedCoreComponent', () => {
  let component: SeedCoreComponent;
  let fixture: ComponentFixture<SeedCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedCoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
