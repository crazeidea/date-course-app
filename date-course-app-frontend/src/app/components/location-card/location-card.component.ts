import { Component, HostBinding, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent implements OnInit {

  @HostBinding('class') class = 'max-w-screen block';

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    height: 100,
    autoHeight: true,
    navigation: true,
    pagination: true,
  };

  constructor() { }

  ngOnInit() { }

}
