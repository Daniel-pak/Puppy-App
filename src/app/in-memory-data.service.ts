import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Puppy } from './puppy';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const puppies = [
      { id: 11, name: 'Labrador R', color: 'Black' },
      { id: 12, name: 'Golden R', color: 'Golden' },
      { id: 13, name: 'Bosten Terrier', color: 'Black & Whites' },
      { id: 14, name: 'Alaskan Malamute', color: 'Grey' },
      { id: 15, name: 'Jindo', color: 'White' },
      { id: 16, name: 'German Shephard', color: 'Brown & Black' },
      { id: 17, name: 'Chihuahua', color: 'Brown' },
      { id: 18, name: 'Pug', color: 'Brown' },
      { id: 19, name: 'Corgi', color: 'Brown' },
      { id: 20, name: 'Greyhound', color: 'Grey' }
    ];
    return {puppies};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(puppies: Puppy[]): number {
    return puppies.length > 0 ? Math.max(...puppies.map(puppy => puppy.id)) + 1 : 11;
  }
}
