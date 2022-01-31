import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { concatMap, debounce, debounceTime, flatMap, map, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  // ! NEVER DO THIS
  // x = new Observable<string>( subscriber => {
  //   subscriber.next('observable')
  // } );

  //* DO THIS
  exampleString: Observable<string> = of('Observable');
  exampleNumber: Observable<number> = of(1);
  exampleBoolean: Observable<boolean> = of(true);

  constructor() { }

  // this will return the observable of string type
  public getString(): Observable<string> {
    return this.exampleString.pipe(

    );
  }

  // this will return the observable of number type
  public getNumber(): Observable<number> {
    return this.exampleNumber;
  }

  // this will return the observable of boolean type
  public getBoolean(): Observable<boolean> {
    return this.exampleBoolean;
  }

  // this will return one of the observables we have inside the array
  public getNewObservable(): Observable<string | number | boolean> {
    const array = ['string', 2, true];
    return of(array[Math.ceil(Math.random()*array.length-1)]);
  }

}
