import { PictureService } from './../../shared/picture.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  skipLinkPath: string;
  constructor(
    private location: Location, 
    public pictureService: PictureService
  ) { }

  picture: string;

  ngOnInit(): void {
    this.skipLinkPath = `${this.location.path()}#mainContent`;
    //? example#1 - Return url to a picture
    // this.pictureService.providePicture().subscribe({
    //   next: url => this.picture = url,
      
    //   })
  }
}
