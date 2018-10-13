
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pi/error',
  }
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

