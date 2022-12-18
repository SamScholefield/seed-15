import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SeedFeatureComponent } from './seed-feature.component'
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
describe('SeedFeatureComponent', () => {
  let component: SeedFeatureComponent
  let fixture: ComponentFixture<SeedFeatureComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeedFeatureComponent],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()

    fixture = TestBed.createComponent(SeedFeatureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
