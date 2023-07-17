import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SigleFacesnapComponent } from './sigle-facesnap/sigle-facesnap.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path: 'facesnaps', component: FaceSnapListComponent},
  {path: 'facesnaps/:id', component: SigleFacesnapComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
