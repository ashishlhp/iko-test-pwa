import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([{
  	path: 'about', loadChildren: './about/about.module#AboutModule'
  }]),
  Shell.childRoutes([{ 
  	path: 'travel',
  	loadChildren: './travel/travel.module#TravelModule',
  }]),
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
