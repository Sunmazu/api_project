﻿import { ObservableComponent } from './app-shell/observable/observable.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app-shell/grid/grid.module').then(module => module.GridModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./app-shell/list/list.module').then(module => module.ListModule)
  },
  {
    path: 'master-detail',
    loadChildren: () => import('./app-shell/master-detail/master-detail.module').then(module => module.MasterDetailModule)
  },
  {
    path: 'observable',
    component: ObservableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

