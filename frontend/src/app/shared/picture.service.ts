import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  
  constructor(public http: HttpClient) {

  }

  //? example#1 - Return url to a picture
  providePicture(): Observable<string> {
    return this.http.get<{url: string}>('/api/picture').pipe(
      map(urlObject => urlObject.url)
    );
  }



}
