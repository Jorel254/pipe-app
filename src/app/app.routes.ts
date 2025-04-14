import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic Pipes',
    loadComponent: () =>
      import('./pages/basic-page/basic-page.component').then(
        (m) => m.BasicPageComponent
      ),
  },
  {
    path: 'numbers',
    title: 'Number Pipes',
    loadComponent: () =>
      import('./pages/number-page/number-page.component').then(
        (m) => m.NumberPageComponent
      ),
  },
  {
    path: 'custom',
    title: 'Custom Pipes',
    loadComponent: () =>
      import('./pages/custom-page/custom-page.component').then(
        (m) => m.CustomPageComponent
      ),
  },
  {
    path: 'uncommon',
    title: 'Uncommon Pipes',
    loadComponent: () =>
      import('./pages/uncommon-page/uncommon-page.component').then(
        (m) => m.UncommonPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
