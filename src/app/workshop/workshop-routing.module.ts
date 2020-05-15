import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XiaomicompanyComponent} from './xiaomicompany/xiaomicompany.component';
import { BentchairComponent } from './bentchair/bentchair.component';
import { RjitComponent } from './rjit/rjit.component';
import { MpctComponent } from './mpct/mpct.component';

const routes: Routes = [
  {path:'xiaomi',component:XiaomicompanyComponent},
  {path:'bentchair',component:BentchairComponent},
  {path:'rjit',component:RjitComponent},
  {path:'mpct',component:MpctComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopRoutingModule { }
