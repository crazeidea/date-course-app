import { Component, HostBinding, OnInit } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
})
export class MainBannerComponent implements OnInit {

  @HostBinding('class.w-full') fullWidth = true;

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    height: 100,
    navigation: true,
    pagination: true,
    loop: true
  };

  constructor() { }

  ngOnInit() { }

}
