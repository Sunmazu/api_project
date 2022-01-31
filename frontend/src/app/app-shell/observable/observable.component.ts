import { ObservableService } from './../../shared/observable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor(public observableService : ObservableService) { }

  ngOnInit() { 

  }

  exampleString: string;
  exampleNumber: number;
  exampleBoolean: boolean;
  exampleRandom: string | number | boolean;

  // public reset() {
  //   this.exampleString = null;
  //   this.exampleNumber = null;
  //   this.exampleBoolean = null;
  //   this.exampleRandom = null;
  // }

  exampleGetString() {
    // this.reset();
    this.observableService.getString().subscribe({
      next: data => this.exampleString = data
    })
  }

  exampleGetNumber() {
    // this.reset();
    this.observableService.getNumber().subscribe({
      next: data => this.exampleNumber = data
    })
  }

  exampleGetBoolean() {
    // this.reset();
    this.observableService.getBoolean().subscribe({
      next: data => this.exampleBoolean = data
    })
  }

  exampleGetRandom() {
    // this.reset();
    this.observableService.getNewObservable().subscribe({
      next: data => this.exampleRandom = data
    })
  }
}
