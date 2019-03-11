import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuppiesComponent }      from './puppies/puppies.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PuppyDetailComponent }  from './puppy-detail/puppy-detail.component';


const routes: Routes = [
  { path: 'puppies', component: PuppiesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: PuppyDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
