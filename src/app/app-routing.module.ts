import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { TrainingComponent} from './training/training.component';
import { ContactComponent } from './contact/contact.component';
import { InternregistrationComponent } from './internregistration/internregistration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes=[
 {path:'',redirectTo:'',pathMatch:'full'},
 {path:'about',component:AboutComponent},
 {path:'service',component:ServiceComponent},
 {path:'training',component:TrainingComponent},
 {path:'contact',component:ContactComponent},
 {path:'internregistration',component:InternregistrationComponent},
 {path:'**',component:PageNotFoundComponent} 


]
@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
