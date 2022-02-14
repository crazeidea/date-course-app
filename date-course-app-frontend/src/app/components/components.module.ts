import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { SwiperModule } from 'swiper/angular';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { IonicModule } from '@ionic/angular';
import { MainSectionComponent } from './main-section/main-section.component';
import { LocationCardComponent } from './location-card/location-card.component';

const components = [
  MainBannerComponent,
  MenuCardComponent,
  MainSectionComponent,
  LocationCardComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule
  ],
  exports: components
})
export class ComponentsModule { }
