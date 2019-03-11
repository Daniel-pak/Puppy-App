import { Component, OnInit } from '@angular/core';
import { Puppy } from '../puppy';
import { PuppyService } from '../puppy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  puppies: Puppy[] = [];

  constructor(private puppyService: PuppyService) { }

  ngOnInit() {
    this.getPuppies();
  }

  getPuppies(): void {
    this.puppyService.getPuppies()
      .subscribe(puppies => this.puppies = puppies.slice(1, 5));
  }
}
