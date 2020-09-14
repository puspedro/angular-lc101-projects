import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Great Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://image.flaticon.com/icons/png/512/226/226777.png';
  image3 = 'https://bgasparotto.com/wp-content/uploads/2016/03/ruby-logo.png';

  constructor() { }

  ngOnInit() {
  }

}