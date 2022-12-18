import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { AppRoutingModule } from './routes/app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SeedCoreModule } from './modules/seed-core/seed-core.module'

import { MatSidenavModule } from '@angular/material/sidenav'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient, HttpClientModule } from '@angular/common/http'

// ngx-translate: AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    SharedModule,
    SeedCoreModule,
    BrowserAnimationsModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
