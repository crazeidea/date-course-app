import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
