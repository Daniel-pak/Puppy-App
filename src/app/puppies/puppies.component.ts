import { Component, OnInit } from '@angular/core';
import { Puppy } from '../puppy';
// import { PUPPIES } from '../mock-puppies';
import { PuppyService } from '../puppy.service';

@Component({
  selector: 'app-puppies',
  templateUrl: './puppies.component.html',
  styleUrls: ['./puppies.component.css']
})
export class PuppiesComponent implements OnInit {

  puppies: Puppy[];

  getPuppies(): void {
  this.puppyService.getPuppies()
    .subscribe(puppies => this.puppies = puppies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.puppyService.addPuppy({ name } as Puppy)
      .subscribe(puppy => {
        this.puppies.push(puppy);
      });
  }

  delete(puppy: Puppy): void {
    this.puppies = this.puppies.filter(p => p !== puppy);
    this.puppyService.deletePuppy(puppy).subscribe();
  }

  constructor(private puppyService: PuppyService) { }

  ngOnInit() {
      this.getPuppies();
  }

}
