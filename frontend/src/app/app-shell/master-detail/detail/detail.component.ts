﻿import { Component, OnInit, Input } from '@angular/core';
import { ISampleOrder } from '../master-detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() sampleOrder: ISampleOrder;

  constructor() {}

  ngOnInit(): void {}
}
