import { Component, OnInit, Input } from '@angular/core';
import { Puppy } from '../puppy';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PuppyService }  from '../puppy.service';

@Component({
  selector: 'app-puppy-detail',
  templateUrl: './puppy-detail.component.html',
  styleUrls: ['./puppy-detail.component.css']
})
export class PuppyDetailComponent implements OnInit {
  @Input() puppy: Puppy;

  constructor(
    private route: ActivatedRoute,
    private puppyService: PuppyService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPuppy();
  }

  goBack(): void {
  this.location.back();
  }

  getPuppy(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.puppyService.getPuppy(id)
      .subscribe(puppy => this.puppy = puppy);
  }

  save(): void {
   this.puppyService.updatePuppy(this.puppy)
     .subscribe(() => this.goBack());
  }

}
