import { Component } from '@angular/core';

@Component({
  selector: 'app-seed-core',
  templateUrl: './seed-core.component.html',
  styleUrls: ['./seed-core.component.scss']
})
export class SeedCoreComponent {
  ngOnInit(): void {
    console.log('seed-core init')
  }
}
