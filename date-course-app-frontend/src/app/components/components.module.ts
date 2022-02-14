import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { SwiperModule } from 'swiper/angular';

const components = [
  MainBannerComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: components
})
export class ComponentsModule { }
