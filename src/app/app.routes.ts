import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'composition-directive',
    loadComponent: () =>
      import(
        './pages/composition-directive/composition-directive.component'
      ).then((c) => c.CompositionDirectiveComponent),
  },
  {
    path: 'inheritance',
    loadComponent: () =>
      import('./pages/inheritance/inheritance.component').then(
        (c) => c.InheritanceComponent
      ),
  },
];
