import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftDrawerComponent } from './left-drawer.component';

describe('LeftDrawerComponent', () => {
  let component: LeftDrawerComponent;
  let fixture: ComponentFixture<LeftDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
