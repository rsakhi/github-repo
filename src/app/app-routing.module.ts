import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgnaisationComponent } from './component/orgnaisation/orgnaisation.component';
import { AnalyticsComponent } from './component/analytics/analytics.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'organization-detail',
    pathMatch: 'full'
  },

  {
    path: "organization-detail",
    component: OrgnaisationComponent 
  },
  {
    path: "analytics",
    component: AnalyticsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
