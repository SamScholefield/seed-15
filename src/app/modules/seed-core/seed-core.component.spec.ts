import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SeedCoreComponent } from './seed-core.component'
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
describe('SeedCoreComponent', () => {
  let component: SeedCoreComponent
  let fixture: ComponentFixture<SeedCoreComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeedCoreComponent],
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

    fixture = TestBed.createComponent(SeedCoreComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
