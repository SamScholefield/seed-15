import { Component } from '@angular/core'

@Component({
  selector: 'seed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLeftDrawerOpen = false
  isRightDrawerOpen = false
  title = 'seed-15'
}
