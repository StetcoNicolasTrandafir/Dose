import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  { path: 'coffee-types', loadChildren: () => import('./pages/coffee-types/coffee-types.module').then(m => m.CoffeeTypesPageModule) },
  { path: 'brews', loadChildren: () => import('./pages/brews/brews.module').then(m => m.BrewsPageModule) },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/coffee-types/coffee-types.module').then( m => m.CoffeeTypesPageModule)
  },
  {
    path: 'coffee',
    loadChildren: () => import('./pages/coffee/coffee.module').then( m => m.CoffeePageModule)
  },
  {
    path: 'brews',
    loadChildren: () => import('./pages/brews/brews.module').then( m => m.BrewsPageModule)
  },
  {
    path: 'coffee-types',
    loadChildren: () => import('./pages/coffee-types/coffee-types.module').then( m => m.CoffeeTypesPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
