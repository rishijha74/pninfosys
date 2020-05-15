import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingModule } from './workshop-routing.module';
import { XiaomicompanyComponent } from './xiaomicompany/xiaomicompany.component';
import { BentchairComponent } from './bentchair/bentchair.component';
import { RjitComponent } from './rjit/rjit.component';
import { MpctComponent } from './mpct/mpct.component';

@NgModule({
  declarations: [XiaomicompanyComponent, BentchairComponent, RjitComponent, MpctComponent],
  imports: [
    CommonModule,
    WorkshopRoutingModule
  ],
  exports:[XiaomicompanyComponent,BentchairComponent,RjitComponent,MpctComponent]
})
export class WorkshopModule { }
