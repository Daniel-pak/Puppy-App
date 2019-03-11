import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Puppy } from './puppy';
import { PUPPIES } from './mock-puppies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PuppyService {
  getPuppies(): Observable<Puppy[]> {
    this.messageService.add('Puppy Service: fetched top puppies');
    return this.http.get<Puppy[]>(this.puppiesUrl)
    .pipe(
      tap(_ => this.log('fetched puppies')),
      catchError(this.handleError('getPuppies', []))
    );
  }

  getPuppy(id: number): Observable<Puppy> {
    // TODO: send the message _after_ fetching the puppy
    const url = `${this.puppiesUrl}/${id}`;
    return this.http.get<Puppy>(url).pipe(
      tap(_ => this.log(`fetched puppy id=${id}`)),
      catchError(this.handleError<Puppy>(`getPuppy id=${id}`))
    );
  }

  /** Log a PuppyService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PuppyService: ${message}`);
  }

  private puppiesUrl = 'api/puppies'; //URL to web api

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** PUT: update the puppy on the server */
  updatePuppy (puppy: Puppy): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.puppiesUrl, puppy, httpOptions).pipe(
      tap(_ => this.log(`updated puppy id=${puppy.id}`)),
      catchError(this.handleError<any>('updatePuppy'))
    );
  }

  /** POST: add a new puppy to the server */
  addPuppy (puppy: Puppy): Observable<Puppy> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Puppy>(this.puppiesUrl, puppy, httpOptions).pipe(
      tap((newPuppy: Puppy) => this.log(`added puppy w/ id=${newPuppy.id}`)),
      catchError(this.handleError<Puppy>('addPuppy'))
    );
  }

  /** DELETE: delete the puppy from the server */
  deletePuppy (puppy: Puppy | number): Observable<Puppy> {
    const id = typeof puppy === 'number' ? puppy : puppy.id;
    const url = `${this.puppiesUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete<Puppy>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted puppy id=${id}`)),
      catchError(this.handleError<Puppy>('deletePuppy'))
    );
  }

  /* GET puppies whose name contains search term */
  searchPuppies(term: string): Observable<Puppy[]> {
    if (!term.trim()) {
      // if not search term, return empty puppy array.
      return of([]);
    }
    return this.http.get<Puppy[]>(`${this.puppiesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found puppies matching "${term}"`)),
      catchError(this.handleError<Puppy[]>('searchPuppies', []))
    );
  }

  constructor(private messageService: MessageService,
    private http: HttpClient) { }
}
