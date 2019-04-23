import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'orgnaisation-detail',
    pathMatch: 'full'
  },

  {
    path: "organization-detail",
    component: OrgnaisationComponenent
  },
  {
    path: "analytics",
    component: AnalyticsComponent
  }
];
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
