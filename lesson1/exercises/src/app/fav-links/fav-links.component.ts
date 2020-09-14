import { Component, OnInit } from '@angular/core';
// import { link } from 'fs';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  link1 = 'https://www.launchcode.org/';
  link2 = 'https://www.w3schools.com/';

  favLinks = [this.link1, this.link2]

  constructor() { }

  ngOnInit() {
  }

}
