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

  providePicture(): Observable<string> {
    return this.http.get<{url: string}>('/api/picture').pipe(
      map(urlObject => urlObject.url)
    );
  }



}
