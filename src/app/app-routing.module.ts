import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildComponent } from './components/build.component';
import { ExperienceComponent } from './components/experience.component';

const routes: Routes = [
  { path: '', redirectTo: '/build', pathMatch: 'full' },
  { path: 'build',  component: BuildComponent },
  { path: 'experience',  component: ExperienceComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
