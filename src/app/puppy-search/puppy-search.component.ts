import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Puppy } from '../puppy';
import { PuppyService } from '../puppy.service';

@Component({
  selector: 'app-puppy-search',
  templateUrl: './puppy-search.component.html',
  styleUrls: [ './puppy-search.component.css' ]
})
export class PuppySearchComponent implements OnInit {
  puppies$: Observable<Puppy[]>;
  private searchTerms = new Subject<string>();

  constructor(private puppyService: PuppyService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.puppies$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.puppyService.searchPuppies(term)),
    );
  }
}
