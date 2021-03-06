import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SalonProfilePageRoutingModule } from './salon-profile-routing.module';

import { SalonProfilePage } from './salon-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    SalonProfilePageRoutingModule
  ],
  declarations: [SalonProfilePage]
})
export class SalonProfilePageModule {}
