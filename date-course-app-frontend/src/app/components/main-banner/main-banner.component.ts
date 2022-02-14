import { AfterContentInit, Component, HostBinding, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Swiper, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
})
export class MainBannerComponent implements OnInit, AfterContentInit {

  @HostBinding('class.w-full') fullWidth = true;

  swiper: Swiper;

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    height: 100,
    navigation: true,
    pagination: true,
    loop: true,
  };

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit(): void {
    setInterval(() => {
      this.swiper.slideNext();
    }, 3000);
  }

  setSwiperInstance(swiper) {
    this.swiper = swiper;
  }

}
