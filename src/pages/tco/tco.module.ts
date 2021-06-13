import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TcoPage } from './tco';

@NgModule({
  declarations: [
    TcoPage,
  ],
  imports: [
    IonicPageModule.forChild(TcoPage),
  ],
})
export class TcoPageModule {}
