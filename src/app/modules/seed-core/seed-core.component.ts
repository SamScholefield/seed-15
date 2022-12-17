import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'seed-core',
  templateUrl: './seed-core.component.html',
  styleUrls: ['./seed-core.component.scss'],
})
export class SeedCoreComponent implements OnInit {
  ngOnInit(): void {
    console.log('seed-core init')
  }
}
